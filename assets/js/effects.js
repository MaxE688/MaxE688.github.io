import * as three from 'three';
import particleImage from "../../images/particle.png";
import effectBG from "../../images/effect-bg.png";

(($) => {
  
  
  $(window).on('load', function() {

    $('#top').on("resize", (event) => {
      const width = $(this).innerWidth();
      const height = $(this).innerHeight();
      camera.aspect(width / height);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      console.log("resize");
    })
    
    const width = $('#top').innerWidth();
    const height = $('#top').innerHeight();

    
    const bg = new three.TextureLoader().load(effectBG)
    const scene = new three.Scene();
    scene.background = bg;
    
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

    
    const interactionRadius = 0.25;
    const dangerRadius = interactionRadius + 0.7;
    const reflectForce = 1.1;

    const renderer = new three.WebGLRenderer();
    renderer.setSize(width, height);

    //put canvas in .container, set background-color of .row to transparent
    // $('#top').prepend(renderer.domElement);
    $('#top').append(renderer.domElement);
    
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
    
    
    
    
    const particleCount = 50;
    const particleSize = 0.5;
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
      
      // color.setHSL(Math.random() * (0.9 - 0.2) + 0.2, 0.9, Math.random() * (0.5 - 0.3) + 0.3);
      // console.log("Red: " + color.r)
      colors[i * 3] = (Math.random() * (50 - 30) + 30)/255//color.r
      colors[i * 3 + 1] = (Math.random() * (255 - 200) + 100)/255 //color.g
      colors[i * 3 + 2] = (Math.random() * (40 - 0) + 0)/255  //color.b
      
      
      // speeds[x] = Math.random() * (0.1 - 0.03) + 0.03; // speed on x-axis
      // speeds[y] = Math.random() * (0.02 - -0.02) + -0.02; //speed on y-axis
      // if(speeds[x] < 0.1 && speeds[x] > 0) speeds[x] = 0.1;
      // if(speeds[x] > -0.1 && speeds[x] < 0) speeds[x] = -0.1;
      // speeds[y] = 0;
      speeds[x] = getXSpeed(); //getXSpeed(); // speed on x-axis
      speeds[y] = getXSpeed(); //getYSpeed();
      speeds[z] = 0 // speed on z access
      
      
    }
    
    particles.setAttribute('position', new three.BufferAttribute(positions, dimensions));
    particles.setAttribute('color', new three.BufferAttribute(colors, 3));
    const sprite = new three.TextureLoader().load(particleImage);
    const particleMaterial = new three.PointsMaterial({ 
      size: particleSize, 
      alphaMap: sprite,
      map: sprite,
      vertexColors: true,
      transparent: true 
      
    });
    const particleSystem = new three.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    const animate = () => {
      // requestAnimationFrame(animate);      
      
      const positions = particleSystem.geometry.attributes.position.array;
      for( let i = 0; i < particleCount; i++){
        const x = i * 3;
        const y = i * 3 + 1;
        // const mX = mouse.x;
        // const mY = mouse.y;
        const velocity = new three.Vector2(
          speeds[x],
          speeds[y] 
        );
        const currPosition = new three.Vector2(positions[x], positions[y]);
        const prevPosition = new three.Vector2(positions[x] - speeds[x], positions[y] - speeds[y]);
        // const currSpeed = getDistance(prevPosition, currPosition);
        
        
        // let distToMouse = Math.sqrt((mX - positions[x])**2 + (mY - positions[y])**2);
        const distToMouse = getDistance(mouse, currPosition);
        const prevDist = getDistance(mouse, prevPosition);
        const currSpeed = Math.abs(distToMouse - prevDist);
        let intersectPoint;
        
        if(distToMouse < dangerRadius){

          const normalizedDist = (distToMouse/(dangerRadius-interactionRadius)) //- interactionRadius
          const reducedSpeed = normalizedDist < 0.2? normalizedDist : 0.97;//0.95;
          // const reducedSpeed = 0.97;
          const increaseSpeed = currPosition.x < mouse.x? 1.05 + ( 1.0 - reducedSpeed) : 1.0 + ( 1.0 - reducedSpeed);
          
          intersectPoint = getIntersection(
            mouse,
            velocity,
            currPosition,
            interactionRadius
          );
          // if(intersectPoint){
            if(prevDist > distToMouse /* && currSpeed > 0.001 */){
              speeds[x] *= reducedSpeed; 
              speeds[y] *= reducedSpeed;
            }
            else if(currSpeed < 0.6 /* && currPosition.x < mouse.x */){
              speeds[x] *= increaseSpeed; 
              speeds[y] *= increaseSpeed; 
            }

            if(currSpeed < 0.005){

              intersectPoint = getIntersection(
                mouse,
                velocity, // consider calculating prev speed to get more accurate result
                currPosition,
                distToMouse
                // interactionRadius
              );

              const R = getReflectionMouse(mouse, velocity, intersectPoint);
              // const distFactor = distToMouse
              // const curveHeight = 0.05;
              // const t = (1 - (distToMouse / distFactor));
              // const parabolaX = currPosition.x + (mX - currPosition.x) * t;
              // const parabolaY = currPosition.y  + (curveHeight * (t * (1-t))) ;
              // const parabolaX = intersectPoint.x + (prevPosition.x - intersectPoint.x) * t;
              // const parabolaY = intersectPoint.y  + (curveHeight * (t * (1-t))) ;
              
              // const rotationAngle = Math.atan2(R.y, R.x); 
              // const cosAngle = Math.cos(rotationAngle);
              // const sinAngle = Math.sin(rotationAngle);
              
              // const rParabolaX = cosAngle * (parabolaX - intersectPoint.x) - sinAngle * (parabolaY - intersectPoint.y) + intersectPoint.x;
              // const rParabolaY = sinAngle * (parabolaX - intersectPoint.x) + cosAngle * (parabolaY - intersectPoint.y) + intersectPoint.y;
              
              // speeds[x] = (rParabolaX - prevPosition.x) * reflectForce; 
              // speeds[y] = (rParabolaY - prevPosition.y) * reflectForce;
              speeds[x] = R.x * 1.05//* reflectForce;
              speeds[y] = R.y * 1.05//* reflectForce;
            }
          // }
          

        }
        if(distToMouse < interactionRadius){

            intersectPoint = getIntersection(
              mouse,
              velocity,
              currPosition,
              interactionRadius
            );

            const R = getReflectionMouse(mouse, velocity, intersectPoint);
            // const distFactor = interactionRadius
            // const curveHeight = 0.05;
            // const t = (1 - (distToMouse / distFactor));

            // const parabolaX = intersectPoint.x + (currPosition.x - intersectPoint.x) * t;
            // const parabolaY = intersectPoint.y  + (curveHeight * (t * (1-t))) ;
            
            // const rotationAngle = Math.atan2(R.y, R.x); 
            // const cosAngle = Math.cos(rotationAngle);
            // const sinAngle = Math.sin(rotationAngle);
            
            // const rParabolaX = cosAngle * (parabolaX - intersectPoint.x) - sinAngle * (parabolaY - intersectPoint.y) + intersectPoint.x;
            // const rParabolaY = sinAngle * (parabolaX - intersectPoint.x) + cosAngle * (parabolaY - intersectPoint.y) + intersectPoint.y;
            
            speeds[x] = R.x * reflectForce; 
            speeds[y] = R.y * reflectForce;
            // speeds[x] = (rParabolaX - currPosition.x) * reflectForce; 
            // speeds[y] = (rParabolaY - currPosition.y) * reflectForce;
            positions[x] = intersectPoint.x + velocity.x;
            positions[y] = intersectPoint.y + velocity.y;
          }
    
    
          
          // if(positions[x] > maxX || positions[x] < minX){ 
            //   positions[x] = minX ;
            //   speeds[x] = Math.abs(speeds[x]) < 0.02? Math.abs(speeds[x]) : getXSpeed();
        //   if(speeds[y] > 0.003 || speeds[y] < -0.003){
          //     speeds[y] = getYSpeed();
          //     // console.log("slowed y down")
        //   }
        // }
        
        // if((positions[y] > maxY || positions[y] < minY)){
          //   positions[y] = Math.random() * (maxY - minY) + minY;
        //   positions[x] = minX-1;
          
        //   if(speeds[y] > 0.003 || speeds[y] < -0.003){
        //     speeds[y] = Math.random() * ( 0.002 - -0.002) + -0.002;
        //     // console.log("slowed y down")
        //   }
        // }

        
        let boundaryReflectSpeed = 1.0;
        const buffer = (particleSize / 2) - 0.05;
        const highSpeed = 0.015;
        const lowSpeed = 0.005;
        const reduceReflect = 0.75;
        const increaseReflect = 1.5;

        if(currPosition.x <= minX + buffer || currPosition.x >= maxX - buffer){
          
          positions[x] = currPosition.x <= minX + buffer? minX + buffer : maxX - buffer;
          
          if(speeds[x] > highSpeed || speeds[x] < -highSpeed ){
            boundaryReflectSpeed = reduceReflect;
          }
          else if(speeds[x] < lowSpeed && speeds[x] > -lowSpeed){
            boundaryReflectSpeed = increaseReflect; 
          }
          speeds[x] = -(speeds[x] * boundaryReflectSpeed);
        }
        
        if(currPosition.y <= minY + buffer || currPosition.y >= maxY - buffer){
          
          positions[y] = currPosition.y <= minY + buffer? minY + buffer : maxY - buffer;

          if(speeds[y] > highSpeed || speeds[y] < -highSpeed){
            boundaryReflectSpeed = reduceReflect;
          }
          else if(speeds[y] < lowSpeed && speeds[y] > -lowSpeed){
            boundaryReflectSpeed = increaseReflect;
          }
          speeds[y] = -(speeds[y] * boundaryReflectSpeed);
        }
        
        positions[x] += speeds[x] > 0.0001 || speeds[x] < -0.0001? speeds[x] : Math.random() * (0.01 - -0.01) + -0.01;
        positions[y] += speeds[y] > 0.0001 || speeds[y] < -0.0001? speeds[y] : Math.random() * (0.01 - -0.01) + -0.01;


      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
    
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate);
    
  });

  /************************************/

  
})(jQuery);

const getXSpeed = () => {
  return Math.random() * (0.015 - -0.015) + -0.015; // speed on x-axis
  // return Math.random() * (0.03 - 0.01) + 0.01; // speed on x-axis
}
const getYSpeed = () => {
  // return Math.random() * (0.002 - -0.002) + -0.003; 
  return Math.random() * (0.002 - -0.002) + -0.003; 
}


const getXSpeed2 = () => {
  return Math.random() * (0.002 - -0.002) + -0.002; //(0.03 - 0.01) + 0.01; // speed on x-axis
}
const getYSpeed2 = () => {
  return -(Math.random() * (0.03 - 0.01) + 0.01); //(0.002 - -0.002) + -0.003; 
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

const getReflectionBoundary = (velocity, boundaryPoint) => {
  boundaryPoint.normalize();
  const dotProduct = velocity.dot(boundaryPoint)
  return velocity.clone().sub(boundaryPoint.clone().multiplyScalar(2*dotProduct));
}

const getReflectionMouse = (mouse, velocity, intersectPoint) => {

  const N = intersectPoint.clone().sub(mouse)
  N.normalize();

  const dotProduct = velocity.dot(N);
  const R = velocity.clone().sub(N.clone().multiplyScalar(2*dotProduct));

  return R;
}