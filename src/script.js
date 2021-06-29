import './style.css'
import * as THREE from 'three'
import scene from './scene'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { skybox } from './textures'
import {
    uRotation, dRotation, fRotation, bRotation, lRotation, rRotation,
    urRotation, drRotation, frRotation, brRotation, lrRotation, rRRotation,
    uuRotation, ddRotation, ffRotation, bbRotation, llRotation, rrRotation
} from './rotation'
import { handleBackButton, handleCamera, handleRetry, handleSnap, handleSave,handleConfirm,handleSubmit, uploadImage, handleManual } from './phaseImage'
import { handleSolve } from './solution'


// Canvas
const canvas = document.querySelector('canvas.webgl')

/**
 *  Shuffle Function
 */

let allRotation = [uRotation, dRotation, fRotation, bRotation, lRotation, rRotation,
    urRotation, drRotation, frRotation, brRotation, lrRotation, rRRotation,
    uuRotation, ddRotation, ffRotation, bbRotation, llRotation, rrRotation];

let callShuffle = () => {
    let min = 5;
    let max = 13;

    let val = Math.floor(Math.random() * (max - min) + min);

    for (var i = 0; i < val; i++) {
        let index = Math.round(Math.random() * 6);
        setTimeout(() => {
            allRotation[index](.1, 200);
        }, 400 * i)
    }

    setTimeout(() => {
        modal.classList.toggle('load_none')

        setTimeout(() => {
            modal.classList.toggle('load_none')
            modal.classList.toggle('none')
        }, 1000)
    }, 410 * i + 500)
}

/** Button Disabled */

let handleDisable = (e) => {
    for (let i = 0; i < 18; i++)
        document.querySelectorAll('.button')[i].disabled = true;

    if (e.target.id.indexOf('-') === 1) {
        setTimeout(() => {
            for (let i = 0; i < 18; i++)
                document.querySelectorAll('.button')[i].disabled = false;
        }, 1100)
    }
    else {
        setTimeout(() => {
            for (let i = 0; i < 18; i++)
                document.querySelectorAll('.button')[i].disabled = false;
        }, 600)
    }
}


/**
 *  Rotation Event Listener
 */

document.getElementById('U').addEventListener('click', () => { uRotation(.5, 600) })
document.getElementById('D').addEventListener('click', () => { dRotation(.5, 600) })
document.getElementById('F').addEventListener('click', () => { fRotation(.5, 600) })
document.getElementById('B').addEventListener('click', () => { bRotation(.5, 600) })
document.getElementById('L').addEventListener('click', () => { lRotation(.5, 600) })
document.getElementById('R').addEventListener('click', () => { rRotation(.5, 600) })

document.getElementById('Ur').addEventListener('click', () => { urRotation(.5, 600) })
document.getElementById('Dr').addEventListener('click', () => { drRotation(.5, 600) })
document.getElementById('Fr').addEventListener('click', () => { frRotation(.5, 600) })
document.getElementById('Br').addEventListener('click', () => { brRotation(.5, 600) })
document.getElementById('Lr').addEventListener('click', () => { lrRotation(.5, 600) })
document.getElementById('Rr').addEventListener('click', () => { rRRotation(.5, 600) })

document.getElementById('U-2').addEventListener('click', () => { uuRotation(1, 1100) })
document.getElementById('D-2').addEventListener('click', () => { ddRotation(1, 1100) })
document.getElementById('F-2').addEventListener('click', () => { ffRotation(1, 1100) })
document.getElementById('B-2').addEventListener('click', () => { bbRotation(1, 1100) })
document.getElementById('L-2').addEventListener('click', () => { llRotation(1, 1100) })
document.getElementById('R-2').addEventListener('click', () => { rrRotation(1, 1100) })


/**
 * Buttons Disabled Evenet Listener
 */
document.querySelectorAll('.button')[0].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[1].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[2].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[3].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[4].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[5].addEventListener('click', handleDisable)

document.querySelectorAll('.button')[6].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[7].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[8].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[9].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[10].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[11].addEventListener('click', handleDisable)

document.querySelectorAll('.button')[12].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[13].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[14].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[15].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[16].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[17].addEventListener('click', handleDisable)



/**
 * Game Flow
 */

// Routes

let page1 = document.querySelector('.page1');
let page2 = document.querySelector('.page2');
let page3 = document.querySelector('.page3');
let solveBtn = document.querySelector('.solve');
let reshuffleWrapper = document.querySelector('.wrapper_resuffle');
let solveWrapper = document.querySelector('.wrapper_solve');
var snap = document.getElementById("snap");
var save = document.getElementById("save");
var confirm = document.getElementById("confirm");
var submit = document.getElementById("submit");
let play = document.querySelector('.play');
let shuffle = document.querySelector('.shuffle');
let guide = document.querySelector('.guidance');
let reshuffle = document.querySelector('.reshuffle');
let modal = document.querySelector('.shuffle_modal');
let back = document.querySelector('.modal_back');
let retry = document.querySelector('.retry');
let upload = document.getElementById('upload_submit');
let manual = document.getElementById('manual');


play.addEventListener('click', () => {
    page1.classList.toggle('none')
    page2.classList.toggle('none')
})

shuffle.addEventListener('click', () => {
    page2.classList.toggle('none')
    page3.classList.toggle('none')
    reshuffleWrapper.classList.remove('none')
    solveWrapper.classList.add('none')
    modal.classList.toggle('none')
    setTimeout(() => {
        callShuffle();
    }, 500)

})

reshuffle.addEventListener('click', () => {
    modal.classList.toggle('none')

    setTimeout(() => {
        callShuffle();
    }, 500)
})


// Camera Work
guide.addEventListener('click', handleCamera)
snap.addEventListener("click", handleSnap)
save.addEventListener("click", handleSave)
confirm.addEventListener("click", handleConfirm)
back.addEventListener('click',handleBackButton)
retry.addEventListener('click',handleRetry)
submit.addEventListener('click',handleSubmit)
upload.addEventListener('click',uploadImage)
manual.addEventListener('click',handleManual)
solveBtn.addEventListener('click',handleSolve)

// draggable color boxes
let colorBoxes = document.getElementsByClassName('grid-item')
let colorOption = document.getElementsByClassName('color')
let dragColor;

for(let colors of colorOption){
    colors.addEventListener('dragstart',(e)=>{
        let Id = e.target.id;
        let elem= document.getElementById(Id)
        dragColor = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    })
}

for(let box of colorBoxes){
    box.addEventListener('dragover',(e)=>{
        e.preventDefault()
    })

    box.addEventListener('drop',(e)=>{
        e.target.style.backgroundColor = dragColor;
    })
}

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
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
const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, .45, 300)
camera.position.z = 12
camera.position.y = 3
camera.position.x = -3
scene.add(camera)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.antialias = true;
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x222222, 1);
// renderer.setPixelRatio(2)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.minDistance = 3;
controls.maxDistance = 40;


/**
 * Lights
 */

const light = new THREE.AmbientLight(0xffffff, 1)
scene.add(light)

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(0, 0, 8)
scene.add(directionalLight1);

const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(-8, 0, 0);
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.set(8, 0, 0);
scene.add(light3);

const light4 = new THREE.DirectionalLight(0xffffff, 1);
light4.position.set(0, 0, -8);
scene.add(light4);

const light5 = new THREE.DirectionalLight(0xffffff, 1);
light5.position.set(0, 8, 0);
scene.add(light5);

const light6 = new THREE.DirectionalLight(0xffffff, 1);
light6.position.set(0, -8, 0);
scene.add(light6);


/**
 * Skybox
 */
scene.add(skybox);


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
