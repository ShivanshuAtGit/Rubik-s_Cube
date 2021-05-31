import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'

/**
 * Base
 */
const parameters = {
    color: 0xff0000,
    spin: () =>
    {
        gsap.to(mesh.rotation, 1, { y: mesh.rotation.y + Math.PI * 2 })
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
const material = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5ee5 })
const mesh = new THREE.Group();
const top1 = new THREE.Group();

// All the 27cube
const mid = new THREE.Mesh(geometry, material);

// face  front

const f1 = new THREE.Mesh(geometry, material); f1.position.set(-1,1,1); mesh.add(f1);
const f2 = new THREE.Mesh(geometry, material); f2.position.set(0,1,1);  mesh.add(f2);
const f3 = new THREE.Mesh(geometry, material); f3.position.set(1,1,1);  mesh.add(f3);
const f4 = new THREE.Mesh(geometry, material); f4.position.set(-1,0,1); mesh.add(f4);
const f5 = new THREE.Mesh(geometry, material); f5.position.set(0,0,1);  mesh.add(f5);
const f6 = new THREE.Mesh(geometry, material); f6.position.set(1,0,1); mesh.add(f6);
const f7 = new THREE.Mesh(geometry, material); f7.position.set(-1,-1,1); mesh.add(f7);
const f8 = new THREE.Mesh(geometry, material); f8.position.set(0,-1,1); mesh.add(f8);
const f9 = new THREE.Mesh(geometry, material); f9.position.set(1,-1,1); mesh.add(f9);

// mid boxes

const materialMid = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5e5 })

const m1 = new THREE.Mesh(geometry, materialMid); m1.position.set(-1,1,0); mesh.add(m1);
const m2 = new THREE.Mesh(geometry, materialMid); m2.position.set(0,1,0);  mesh.add(m2);
const m3 = new THREE.Mesh(geometry, materialMid); m3.position.set(1,1,0);  mesh.add(m3);
const m4 = new THREE.Mesh(geometry, materialMid); m4.position.set(-1,0,0); mesh.add(m4);
const m5 = new THREE.Mesh(geometry, materialMid); m5.position.set(0,0,0);  mesh.add(m5);
const m6 = new THREE.Mesh(geometry, materialMid); m6.position.set(1,0,0); mesh.add(m6);
const m7 = new THREE.Mesh(geometry, materialMid); m7.position.set(-1,-1,0); mesh.add(m7);
const m8 = new THREE.Mesh(geometry, materialMid); m8.position.set(0,-1,0); mesh.add(m8);
const m9 = new THREE.Mesh(geometry, materialMid); m9.position.set(1,-1,0); mesh.add(m9);


// last set of boxes

const materialLast =[];
materialLast[0] = new THREE.MeshBasicMaterial({ map: texture, color: 0xff0000 })
materialLast[1] = new THREE.MeshBasicMaterial({ map: texture, color: 0x00ff00 })
materialLast[2] = new THREE.MeshBasicMaterial({ map: texture, color: 0x0000ff })
materialLast[3] = new THREE.MeshBasicMaterial({ map: texture, color: 0x11ffff })
materialLast[4] = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff })
materialLast[5] = new THREE.MeshBasicMaterial({ map: texture, color: 0x00ffff })

const l1 = new THREE.Mesh(geometry, materialLast); l1.position.set(-1,1,-1); mesh.add(l1);
const l2 = new THREE.Mesh(geometry, materialLast); l2.position.set(0,1,-1);  mesh.add(l2);
const l3 = new THREE.Mesh(geometry, materialLast); l3.position.set(1,1,-1);  mesh.add(l3);
const l4 = new THREE.Mesh(geometry, materialLast); l4.position.set(-1,0,-1); mesh.add(l4);
const l5 = new THREE.Mesh(geometry, materialLast); l5.position.set(0,0,-1);  mesh.add(l5);
const l6 = new THREE.Mesh(geometry, materialLast); l6.position.set(1,0,-1); mesh.add(l6);
const l7 = new THREE.Mesh(geometry, materialLast); l7.position.set(-1,-1,-1); mesh.add(l7);
const l8 = new THREE.Mesh(geometry, materialLast); l8.position.set(0,-1,-1); mesh.add(l8);
const l9 = new THREE.Mesh(geometry, materialLast); l9.position.set(1,-1,-1); mesh.add(l9);



top1.add(l1);
top1.add(l2);
top1.add(l3);

top1.add(m1);
top1.add(m2);
top1.add(m3);

top1.add(f1);
top1.add(f2);
top1.add(f3);

mesh.add(mid);

scene.add(mesh);
scene.add(top1);

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
// gui.hide()
gui.add(mesh.position, 'y').min(- 3).max(3).step(0.01).name('elevation')
gui.add(mesh, 'visible')
gui.add(material, 'wireframe')

gui
    .addColor(parameters, 'color')
    .onChange(() =>
    {
        material.color.set(parameters.color)
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
    top1.rotation.y +=.01;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()