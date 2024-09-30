// import * as _ from "./main.js";
import * as three from 'three';
import particleImage from "../../images/particle.png";
// import * as $ from "jquery";
// window.jQuery = $;

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
    let sceneWidth = (frustrumWidth / camera.near) * cameraDistance;
    let sceneHeight = (frustrumHeight / camera.near) * cameraDistance;

    

    const maxX = sceneWidth / 2;
    const minX = -(maxX);
    const maxY = sceneHeight / 2;
    const minY = -(maxY);

    const interactionRadius = 0.3;
    const dangerRadius = interactionRadius + 1.5;
    const reflectForce = 1.5;

    const renderer = new three.WebGLRenderer();
    renderer.setSize(width, height);

    //put canvas in .container, set background-color of .row to transparent
    $('#top').prepend(renderer.domElement);
    
    let geometry = new three.BoxGeometry( 10.3, 1, 1 );
    let material = new three.MeshBasicMaterial( { color: 0xffffff } );
    const cube = new three.Mesh( geometry, material );
    // scene.add( cube );
    
    geometry = new three.CircleGeometry( dangerRadius, 32 ); 
    material = new three.MeshBasicMaterial( { color: 0x111111 } ); 
    const circle1 = new three.Mesh( geometry, material ); 
    circle1.position.x = 1000;
    circle1.position.y = 1000;
    // scene.add( circle1 );
    
    geometry = new three.CircleGeometry( interactionRadius, 32 ); 
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
      circle1.position.x = mouse.x;
      circle1.position.y = mouse.y;
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
    
    
    
    
    const particleCount = 100;
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
      
      
      // speeds[x] = Math.random() * (0.01 - 0.005) + 0.005; // speed on x-axis
      // speeds[y] = Math.random() * (0.002 - -0.002) + -0.003; //speed on y-axis
      speeds[x] = getXSpeed(); // speed on x-axis
      speeds[y] = getYSpeed();
      speeds[z] = 0 // speed on z access
      
      
    }
    
    particles.setAttribute('position', new three.BufferAttribute(positions, dimensions));
    particles.setAttribute('color', new three.BufferAttribute(colors, 3));
    const sprite = new three.TextureLoader().load(particleImage);
    const particleMaterial = new three.PointsMaterial({ 
      size: 0.15, 
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
        const velocity = new three.Vector2(speeds[x], speeds[y]);
        const currPosition = new three.Vector2(positions[x], positions[y]);
        const prevPosition = new three.Vector2(positions[x] - speeds[x], positions[y] - speeds[y]);
        
        
        // let distToMouse = Math.sqrt((mX - positions[x])**2 + (mY - positions[y])**2);
        const distToMouse = getDistance(mouse, currPosition);
        const prevDist = getDistance(mouse, prevPosition);

        let intersectPoint
        
        if(distToMouse < dangerRadius){
          const reducedSpeed = 0.99;
          const increaseSpeed = 1.05 + ( 1.0 - reducedSpeed);
          
          intersectPoint = getIntersection(
            mouse,
            velocity,
            currPosition,
            interactionRadius
          );
          if(intersectPoint){
            if(prevDist > distToMouse && getDistance(prevPosition, currPosition) > 0.008){
              speeds[x] *= reducedSpeed; 
              speeds[y] *= reducedSpeed;
            }
            else if(getDistance(prevPosition, currPosition) < 0.6){
              speeds[x] *= increaseSpeed; 
              speeds[y] *= increaseSpeed; 
            }
          }
          
        }
        if(distToMouse < interactionRadius){
          
          intersectPoint = getIntersection(
            mouse,
            velocity,
            currPosition,
            interactionRadius
          );
          const R = getReflection(mouse, velocity, intersectPoint);
          const distFactor = interactionRadius
          const curveHeight = 0.05;
          const t = (1 - (distToMouse / distFactor));
          // const parabolaX = currPosition.x + (mX - currPosition.x) * t;
          // const parabolaY = currPosition.y  + (curveHeight * (t * (1-t))) ;
          const parabolaX = intersectPoint.x + (currPosition.x - intersectPoint.x) * t;
          const parabolaY = intersectPoint.y  + (curveHeight * (t * (1-t))) ;
          
          const rotationAngle = Math.atan2(R.y, R.x); 
          const cosAngle = Math.cos(rotationAngle);
          const sinAngle = Math.sin(rotationAngle);
          
          const rParabolaX = cosAngle * (parabolaX - intersectPoint.x) - sinAngle * (parabolaY - intersectPoint.y) + intersectPoint.x;
          const rParabolaY = sinAngle * (parabolaX - intersectPoint.x) + cosAngle * (parabolaY - intersectPoint.y) + intersectPoint.y;
          
          speeds[x] = (rParabolaX - currPosition.x) * reflectForce; 
          speeds[y] = (rParabolaY - currPosition.y) * reflectForce;
        }
          
          // const parabolaY = intersectPoint.y  + a * (parabolaX - intersectPoint.x) * (parabolaX - intersectPoint.x);
          // const R = getReflection(mouse, velocity, intersectPoint);
          // speeds[x] = R.x * reflectForce;
          // speeds[y] = R.y * reflectForce;
          // positions[x] = intersectPoint.x + velocity.x;
          // positions[y] = intersectPoint.y + velocity.y;
        //}
        

    
        positions[x] += speeds[x];
        positions[y] += speeds[y];

        if(positions[x] > maxX || positions[x] < minX-1){ 
          positions[x] = minX - 1;
          speeds[x] = Math.abs(speeds[x]) < 0.02? Math.abs(speeds[x]) : getXSpeed();
          if(speeds[y] > 0.003 || speeds[y] < -0.003){
            speeds[y] = getYSpeed();
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
    
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate);
    
  });

  /************************************/

  
})(jQuery);

const getXSpeed = () => {
  return Math.random() * (0.03 - 0.01) + 0.01; // speed on x-axis
}
const getYSpeed = () => {
  return Math.random() * (0.002 - -0.002) + -0.003; 
}

const getDistance = (p1, p2) => {
  return Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2 )
}

const getIntersection = (mouse, velocity, particle, interactionRadius) => {
  let intersectPoint;
  const c = mouse
  const v = velocity
  const p = particle;
  
  const A = v.x**2 + v.y**2;
  const B = 2*((p.x - c.x) * v.x + (p.y - c.y) * v.y);
  const C = (p.x - c.x)**2 + (p.y - c.y)**2 - interactionRadius**2;
  
  const discriminant = B**2 - 4*A*C;

  const t1 = (-(B) + Math.sqrt(discriminant))/(2 * A);
  const t2 = (-(B) - Math.sqrt(discriminant))/(2 * A);

  if(discriminant > 0){
    const point1 = new three.Vector2( (p.x + t1 * v.x), (p.y + t1 * v.y) );
    const point2 = new three.Vector2( (p.x + t2 * v.x), (p.y + t2 * v.y) );

    const distP1 = Math.sqrt((point1.x - p.x)**2 + (point1.y - p.y)**2);
    const distP2 = Math.sqrt((point2.x - p.x)**2 + (point2.y - p.y)**2);
    intersectPoint = distP1 - distP2 > 0? point2 : point1;

  }
  else if(discriminant == 0){
    console.log("Discriminant is 0");
  }
  
  return intersectPoint;
}

const getReflection = (mouse, velocity, intersectPoint) => {

  const N = intersectPoint.clone().sub(mouse)
  N.normalize();

  const dotProduct = velocity.dot(N);
  const R = velocity.clone().sub(N.clone().multiplyScalar(2*dotProduct));

  return R;
}