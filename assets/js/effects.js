import * as three from '../../node_modules/three/src/Three';

(($) => {
  
  
  $(window).on('load', function() {
    
    const width = $('#top').innerWidth();
    const height = $('#top').innerHeight();

    
    const scene = new three.Scene();
    
    const camera = new three.PerspectiveCamera(75, width / height, 0.1, 1000);
    const frustrumHeight = 2 * Math.tan(three.MathUtils.degToRad(camera.fov / 2)) * camera.near;
    const frustrumWidth = frustrumHeight * (width / height);

    const cameraDistance = 5;
    camera.position.z = cameraDistance;
    const sceneWidth = (frustrumWidth / camera.near) * cameraDistance;
    const sceneHeight = (frustrumHeight / camera.near) * cameraDistance;

    const maxX = sceneWidth / 2;
    const minX = -(maxX);
    const maxY = sceneHeight / 2;
    const minY = -(maxY);

    const interactionRadius = 0.8;
    const reflectForce = 1.3;

    const renderer = new three.WebGLRenderer();
    renderer.setSize(width, height);

    //put canvas in .container, set background-color of .row to transparent
    $('#top').prepend(renderer.domElement);
    
    let geometry = new three.BoxGeometry( 10.3, 1, 1 );
    let material = new three.MeshBasicMaterial( { color: 0xffffff } );
    const cube = new three.Mesh( geometry, material );
    // scene.add( cube );
    
    geometry = new three.CircleGeometry( 0.3, 32 ); 
    material = new three.MeshBasicMaterial( { color: 0x0000ff } ); 
    const circle = new three.Mesh( geometry, material ); 
    circle.position.x = 1000;
    circle.position.y = 1000;
    // scene.add( circle );
    
    $('canvas').addClass("mouse-listener");
    $('canvas').attr("id", "effects");
    const canvasDimensions = document.getElementById('effects').getBoundingClientRect();
    
    /************************************/
    
    const mouse = new three.Vector2(1000,1000);
    $('.mouse-listener').on('mousemove', event => trackMouse(event)); 
    
    const trackMouse = ( event ) => {
      // const canvas = event.target.getBoundingClientRect();
      
      mouse.x = ((event.clientX - canvasDimensions.left) / canvasDimensions.width) * (sceneWidth) - (maxX);
      mouse.y = -((event.clientY - canvasDimensions.top) / canvasDimensions.height) * (sceneHeight) + (maxY);
      // console.log('(' + mouse.x + ', ' + mouse.y + ')');
      circle.position.x = mouse.x;
      circle.position.y = mouse.y;
      // console.log('Mouse: (' + mouse.x + ', ' + mouse.y + ')');
    }
  
    $('canvas').on('mouseleave', (event) => {
      mouse.x = 1000;
      mouse.y = 1000;
    });

    $('.mouse-listener').on('click', (event) => {
      const x = ((event.clientX - canvasDimensions.left) / canvasDimensions.width) * (sceneWidth) - (maxX);
      const y = -((event.clientY - canvasDimensions.top) / canvasDimensions.height) * (sceneHeight) + (maxY);
      console.log('Click: (' + x + ', ' + y + ')');
      console.log('Mouse: (' + mouse.x + ', ' + mouse.y + ')');
      
      geometry = new three.CircleGeometry( 0.05, 32 ); 
      material = new three.MeshBasicMaterial( { color: 0xff0000 } ); 
      const circle = new three.Mesh( geometry, material );
      circle.position.x =  x
      circle.position.y =  y
      scene.add( circle );
      
    });
    
    
    
    
    const particleCount = 800;
    const particles = new three.BufferGeometry();
    const dimensions = 3
    const positions = new Float32Array(particleCount * dimensions);
    const colors = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount * dimensions)
    const color = new three.Color();
    
    for(let i = 0; i < particleCount; i++){
      const x = i * dimensions;
      const y = i * dimensions + 1;
      const z = i * dimensions + 2;

      // if(speeds[x] === 0){
      //   console.log("Zero speed: ")
      // }
      
      positions[x] = Math.random() * (maxX - minX) + minX;
      positions[y] = Math.random() * (maxY - minY) + minY;
      // positions[i*3 + 2] = Math.random() * (3 - -3) + -3;
      positions[z] = 0;
      
      color.setHSL(Math.random(), 0.7, Math.random());
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      
      
      speeds[x] = Math.random() * (0.01 - 0.005) + 0.005; // speed on x-axis
      speeds[y] = Math.random() * (0.002 - -0.002) + -0.002; //speed on y-axis
      speeds[z] = 0 // speed on z access
      
      
    }
    
    particles.setAttribute('position', new three.BufferAttribute(positions, dimensions));
    particles.setAttribute('color', new three.BufferAttribute(colors, 3));
    const sprite = new three.TextureLoader().load('../images/particle.png')
    const particleMaterial = new three.PointsMaterial({ 
      size: 0.08, 
      map: sprite,
      vertexColors: true 
      
    });
    const particleSystem = new three.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    const animate = () => {
      // requestAnimationFrame(animate);      
      const positions = particleSystem.geometry.attributes.position.array;
      for( let i = 0; i < particleCount; i++){
        const x = i * 3;
        const y = i * 3 + 1;
        const mX = mouse.x;
        const mY = mouse.y;
        
        
        let distToMouse = Math.sqrt((mX - positions[x])**2 + (mY - positions[y])**2);
        
        if(distToMouse < interactionRadius){
          positions[x] -= speeds[x];
          positions[y] -= speeds[y];

          
          let intersectPoint;
          const c = new three.Vector2(mX, mY);
          const v = new three.Vector2(speeds[x], speeds[y]);
          const p = new three.Vector2(positions[x] - speeds[x], positions[y] - speeds[y]);
          
          
          const A = v.x**2 + v.y**2;
          const B = 2*((p.x - c.x) * v.x + (p.y - c.y) * v.y);
          const C = (p.x - c.x)**2 + (p.y - c.y)**2 - interactionRadius**2;
          
          const discriminant = B**2 - 4*A*C;

          const t1 = (-(B) + Math.sqrt(discriminant))/(2 * A);
          const t2 = (-(B) - Math.sqrt(discriminant))/(2 * A);

          if(discriminant > 0){
            const point1 = new three.Vector2( (p.x + t1 * v.x), (p.y + t1 * v.y) );
            const point2 = new three.Vector2( (p.x + t2 * v.x), (p.y + t2 * v.y) );

            const distP1 = Math.sqrt((point1.x - positions[x])**2 + (point1.y - positions[y])**2);
            const distP2 = Math.sqrt((point2.x - p.x)**2 + (point2.y - p.y)**2);
            intersectPoint = distP1 - distP2 > 0? point2 : point1;

          }
          else{
            console.log("There are not 2 intersection points");
          }
          
          const N = intersectPoint.clone().sub(c)
          N.normalize();

          const dotProduct = v.dot(N);
          const R = v.sub(N.multiplyScalar(2*dotProduct));
          
          speeds[x] = R.x * reflectForce;
          speeds[y] = R.y * reflectForce;
          positions[x] = intersectPoint.x + v.x;
          positions[y] = intersectPoint.y + v.y;

        }

    
        positions[x] += speeds[x];
        positions[y] += speeds[y] ;

        if(positions[x] > maxX || positions[x] < minX-1){ 
          positions[x] = minX - 1;
          speeds[x] = Math.abs(speeds[x]) < 0.02? Math.abs(speeds[x]) : Math.random() * (0.01 - 0.05) - 0.05;
          if(speeds[y] > 0.003 || speeds[y] < -0.003){
            speeds[y] = Math.random() * ( 0.002 - -0.002) + -0.002;
            // console.log("slowed y down")
          }
        }
        
        if((positions[y] > maxY || positions[y] < minY)){
          positions[y] = Math.random() * (maxY - minY) + minY;
          positions[x] = minX-1;
          
          if(speeds[y] > 0.003 || speeds[y] < -0.003){
            speeds[y] = Math.random() * ( 0.002 - -0.002) + -0.002;
            // console.log("slowed y down")
          }
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
    
      // cube.position.y = 0;
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate);
    
  });

  /************************************/

  
})(jQuery);



