import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'
import { UnsignedShort4444Type } from 'three'

/**
 * Base
 */
const parameters = {
    // color: 0xff0000,
    spin: () =>
    {
        gsap.to(f[0].rotation, 1, { y: f[0].rotation.y + Math.PI /2  })
    }
}


/*
* texture
*/

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/textures/pegatinaColor.png')


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * Object
 */
const geometry = new THREE.BoxBufferGeometry(1, 1, 1)




/**
 * Color Buider
 */


// materialLast[0] = new THREE.MeshBasicMaterial({ map: texture, color: 0xff0000 })
// materialLast[1] = new THREE.MeshBasicMaterial({ map: texture, color: 0x00ff00 })
// materialLast[2] = new THREE.MeshBasicMaterial({ map: texture, color: 0x0000ff })
// materialLast[3] = new THREE.MeshBasicMaterial({ map: texture, color: 0x11ffff })
// materialLast[4] = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff })
// materialLast[5] = new THREE.MeshBasicMaterial({ map: texture, color: 0x00ffff })






// faces

const material = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5ee5 })
const materialMid = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5e5 })
const materialLast =new THREE.MeshBasicMaterial({ map: texture, color: 0xff0000 });


const f = [], vector =[];
let x=0,y=2,z=1 ;    


    for(let i=0;i<9;i++){
        if(i%3===0)
          y--;
        
        //  Front face
        f.push(new THREE.Mesh(geometry, material));
        f[3*i].position.set(x-1,y,z); 

        //  Mid face
        f.push(new THREE.Mesh(geometry, materialMid));
        f[3*i +1].position.set(x-1,y,z-1); 

        //  Last face
        f.push(new THREE.Mesh(geometry, materialLast));
        f[3*i+2].position.set(x-1,y,z-2); 

        vector.push( new THREE.Vector3(x-1,y,z));
        vector.push( new THREE.Vector3(x-1,y,z-1));
        vector.push( new THREE.Vector3(x-1,y,z-2));

        scene.add(f[3*i]);
        scene.add(f[3*i+1]);
        scene.add(f[3*i+2])
        
        x = (x+1)%3;
      
    }



// 

/**
 * Event Listener
 */


//  U  Rotation
 document.getElementById('U').addEventListener('click',()=>{
    const mesh = new THREE.Group();
     let uRot =[]
    
   
    for(let i=0;i<27;i++){
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)
        
        for(let j=0;j<9;j++){
            if(Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z){
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);
    
    gsap.to(mesh.rotation, 1, { y: mesh.rotation.y - Math.PI /2  })
    
    setTimeout(()=>{

        f.forEach((element) => {
            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            element.position.copy(position1.setFromMatrixPosition(element.matrixWorld));
            scene.add(element);
            console.log(element)
        });
        scene.updateMatrixWorld(true);

    },1250)
  
})


//  D  Rotation

document.getElementById('D').addEventListener('click',()=>{
    const mesh = new THREE.Group();
     let uRot =[]
    
   
    for(let i=0;i<27;i++){
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)
        
        for(let j=18;j<27;j++){
            if(Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z){
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);
    
    gsap.to(mesh.rotation, 1, { y: mesh.rotation.y + Math.PI /2  })
    
    setTimeout(()=>{

        f.forEach((element) => {
            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            element.position.copy(position1.setFromMatrixPosition(element.matrixWorld));
            scene.add(element);
            console.log(element)
        });
        scene.updateMatrixWorld(true);

    },1250)
  
})

//  F  Rotation

document.getElementById('F').addEventListener('click',()=>{
    const mesh = new THREE.Group();
     let uRot =[]
    
   
    for(let i=0;i<27;i++){
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)
        
        for(let j=0;j<9;j++){
            if(Math.round(position.x) === vector[3*j].x && Math.round(position.y) === vector[3*j].y && Math.round(position.z) === vector[3*j].z){
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);
    
    gsap.to(mesh.rotation, 1, { z: mesh.rotation.z - Math.PI /2  })
    
    setTimeout(()=>{

        f.forEach((element) => {
            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            element.position.copy(position1.setFromMatrixPosition(element.matrixWorld));
            scene.add(element);
            console.log(element)
        });
        scene.updateMatrixWorld(true);

    },1250)
  
})


// B rotation

document.getElementById('B').addEventListener('click',()=>{
    const mesh = new THREE.Group();
     let uRot =[]
    
   
    for(let i=0;i<27;i++){
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)
        
        for(let j=2;j<27;j=j+3){
            if(Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z){
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);
    
    gsap.to(mesh.rotation, 1, { z: mesh.rotation.z + Math.PI /2  })
    
    setTimeout(()=>{

        f.forEach((element) => {
            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            element.position.copy(position1.setFromMatrixPosition(element.matrixWorld));
            scene.add(element);
            console.log(element)
        });
        scene.updateMatrixWorld(true);

    },1250)
  
})

// L rotation

document.getElementById('L').addEventListener('click',()=>{
    const mesh = new THREE.Group();
     let uRot =[]
    
   
    for(let i=0;i<27;i++){
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)
        
        for(let j=0;j<27;j++){
        if(j<3 || j>=9 && j<12 || j>=18 && j<21)
            if(Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z){
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);
    
    gsap.to(mesh.rotation, 1, { x: mesh.rotation.x + Math.PI /2  })
    
    setTimeout(()=>{

        f.forEach((element) => {
            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            element.position.copy(position1.setFromMatrixPosition(element.matrixWorld));
            scene.add(element);
            console.log(element)
        });
        scene.updateMatrixWorld(true);

    },1250)
  
})

// R rotation

document.getElementById('R').addEventListener('click',()=>{
    const mesh = new THREE.Group();
     let uRot =[]
    
   
    for(let i=0;i<27;i++){
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)
        
        for(let j=0;j<27;j++){
        if(j>=6 &&j<9 || j>=15 && j<18 || j>=24 && j<27)
            if(Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z){
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);
    
    gsap.to(mesh.rotation, 1, { x: mesh.rotation.x - Math.PI /2  })
    
    setTimeout(()=>{

        f.forEach((element) => {
            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            element.position.copy(position1.setFromMatrixPosition(element.matrixWorld));
            scene.add(element);
            console.log(element)
        });
        scene.updateMatrixWorld(true);

    },1250)
  
})






/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth*0.7,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth*0.7
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 8
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.antialias = true;
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor( 0x222222, 1 );
// renderer.setPixelRatio(2)


/**
 * Debug
 */
const gui = new dat.GUI({
    closed: true,
    width: 400
})

gui.add(parameters, 'spin')



/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()
    // topLevel.rotation.y +=.01;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()