import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'

/**
 * Base
 */
const parameters = {
    // color: 0xff0000,
    spin: () =>
    {
        gsap.to(topLevel.rotation, 1, { y: topLevel.rotation.y + Math.PI /2  })
    }
}


/*
* texture
*/

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/textures/pegatinaColor.png')

console.log(texture)


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * Object
 */
const geometry = new THREE.BoxBufferGeometry(1, 1, 1)


const topLevel = new THREE.Group();
const midLevel = new THREE.Group();
const bottomLevel = new THREE.Group();


// face  front

const material = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5ee5 })
const f1 = new THREE.Mesh(geometry, material); f1.position.set(-1,1,1); 
const f2 = new THREE.Mesh(geometry, material); f2.position.set(0,1,1);  
const f3 = new THREE.Mesh(geometry, material); f3.position.set(1,1,1);  
const f4 = new THREE.Mesh(geometry, material); f4.position.set(-1,0,1); 
const f5 = new THREE.Mesh(geometry, material); f5.position.set(0,0,1);  
const f6 = new THREE.Mesh(geometry, material); f6.position.set(1,0,1); 
const f7 = new THREE.Mesh(geometry, material); f7.position.set(-1,-1,1); 
const f8 = new THREE.Mesh(geometry, material); f8.position.set(0,-1,1); 
const f9 = new THREE.Mesh(geometry, material); f9.position.set(1,-1,1); 

// mid boxes

const materialMid = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5e5 })

const m1 = new THREE.Mesh(geometry, materialMid); m1.position.set(-1,1,0); 
const m2 = new THREE.Mesh(geometry, materialMid); m2.position.set(0,1,0);  
const m3 = new THREE.Mesh(geometry, materialMid); m3.position.set(1,1,0);  
const m4 = new THREE.Mesh(geometry, materialMid); m4.position.set(-1,0,0); 
const m5 = new THREE.Mesh(geometry, materialMid); m5.position.set(0,0,0);  
const m6 = new THREE.Mesh(geometry, materialMid); m6.position.set(1,0,0); 
const m7 = new THREE.Mesh(geometry, materialMid); m7.position.set(-1,-1,0); 
const m8 = new THREE.Mesh(geometry, materialMid); m8.position.set(0,-1,0); 
const m9 = new THREE.Mesh(geometry, materialMid); m9.position.set(1,-1,0); 


// last set of boxes

const materialLast =[];
materialLast[0] = new THREE.MeshBasicMaterial({ map: texture, color: 0xff0000 })
materialLast[1] = new THREE.MeshBasicMaterial({ map: texture, color: 0x00ff00 })
materialLast[2] = new THREE.MeshBasicMaterial({ map: texture, color: 0x0000ff })
materialLast[3] = new THREE.MeshBasicMaterial({ map: texture, color: 0x11ffff })
materialLast[4] = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff })
materialLast[5] = new THREE.MeshBasicMaterial({ map: texture, color: 0x00ffff })

const l1 = new THREE.Mesh(geometry, materialLast); l1.position.set(-1,1,-1); 
const l2 = new THREE.Mesh(geometry, materialLast); l2.position.set(0,1,-1);  
const l3 = new THREE.Mesh(geometry, materialLast); l3.position.set(1,1,-1);  
const l4 = new THREE.Mesh(geometry, materialLast); l4.position.set(-1,0,-1); 
const l5 = new THREE.Mesh(geometry, materialLast); l5.position.set(0,0,-1);  
const l6 = new THREE.Mesh(geometry, materialLast); l6.position.set(1,0,-1); 
const l7 = new THREE.Mesh(geometry, materialLast); l7.position.set(-1,-1,-1); 
const l8 = new THREE.Mesh(geometry, materialLast); l8.position.set(0,-1,-1); 
const l9 = new THREE.Mesh(geometry, materialLast); l9.position.set(1,-1,-1); 


/** Top Level Cube Rotation */
topLevel.add(l1);
topLevel.add(l2);
topLevel.add(l3);
topLevel.add(m1);
topLevel.add(m2);
topLevel.add(m3);
topLevel.add(f1);
topLevel.add(f2);
topLevel.add(f3);

/** Mid Level Cube Rotation */

 midLevel.add(l4);
 midLevel.add(l5);
 midLevel.add(l6);
 midLevel.add(m4);
 midLevel.add(m5);
 midLevel.add(m6);
 midLevel.add(f4);
 midLevel.add(f5);
 midLevel.add(f6);

/** Bottom Level Rotation */

 bottomLevel.add(l7);
 bottomLevel.add(l8);
 bottomLevel.add(l9);
 bottomLevel.add(m7);
 bottomLevel.add(m8);
 bottomLevel.add(m9);
 bottomLevel.add(f7);
 bottomLevel.add(f8);
 bottomLevel.add(f9);


scene.add(topLevel);
scene.add(midLevel);
scene.add(bottomLevel);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
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
 gui.hide()
 gui.add(topLevel.position, 'y').min(- 3).max(3).step(0.01).name('elevation')
 gui.add(topLevel, 'visible')
 gui.add(material, 'wireframe')

 gui
     .addColor(parameters, 'color')
     .onChange(() =>
     {
         material.color.set(parameters.color)
     })
 */


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