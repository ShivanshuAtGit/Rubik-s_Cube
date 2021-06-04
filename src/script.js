import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'


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
// const geometryPlane = new THREE.PlaneGeometry( 100,100 );
// const materialPlane = new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0xe5e5e5 , side : THREE.DoubleSide })
// const plane = new THREE.Mesh( geometryPlane, materialPlane );
// plane.position.set(0,-30,0)
// plane.rotation.x += Math.PI/2
// scene.add( plane );


/**
 * Faces Color DataStructure
 */

let frontColor = []
let upperColor = []
let downColor = []
let rightColor = []
let leftColor = []
let backColor = []

for (let k = 0; k < 9; k++) {
    frontColor.push('rgb(255, 255, 255)')
    upperColor.push('rgb(40, 40, 250)')
    downColor.push('rgb(2, 175, 2)')
    rightColor.push('rgb(238, 6, 6)')
    leftColor.push('rgb(253, 166, 5)')
    backColor.push('rgb(255, 255, 0)')
}



/**
 * Color Buider
 */

let matList = [];
const material = [];

/** First Layer */
// 1st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[2] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[6] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[0]}))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 2st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[1] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[3] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 3st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[0] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[0] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[6] }))
material.push(matList);
matList = [];

// 4st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[7] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[1] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 5st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[4] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 6st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[1] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[7] }))
material.push(matList);
matList = [];

// 7st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[0] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[8] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[2] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 8st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[1] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[5] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 9st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[2] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: upperColor[2] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[8] }))
material.push(matList);
matList = [];


/** Second Layer */

// 1st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[5] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[3] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 2st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[4] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 3st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[3] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[3] }))
material.push(matList);
matList = [];

// 4st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[4] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 5st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 6st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[4] }))
material.push(matList);
matList = [];

// 7st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[3] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[5] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 8st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[4] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 9st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[5] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[5] }))
material.push(matList);
matList = [];



/** Third Layer */

// 1st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[8] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[0] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[6] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 2st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[7] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[3] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 3st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: leftColor[6] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[6] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[0] }))
material.push(matList);
matList = [];

// 4st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[1] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[7] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 5st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[4] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 6st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[7] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[1] }))
material.push(matList);
matList = [];

// 7st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[6] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[2] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: frontColor[8] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 8st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[7] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[5] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
material.push(matList);
matList = [];

// 9st Dice 
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: rightColor[8] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: downColor[8] }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: 0x000000 }))
matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[2] }))
material.push(matList);
matList = [];





// faces

// const material = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5ee5 })
// const materialMid = new THREE.MeshBasicMaterial({ map: texture,color: 0xe5e5e5 })
// const materialLast =new THREE.MeshBasicMaterial({ map: texture, color: 0xff0000 });


const f = [], vector = [];
let x = 0, y = 2, z = 1;


for (let i = 0; i < 9; i++) {
    if (i % 3 === 0)
        y--;

    //  Front layer
    f.push(new THREE.Mesh(geometry, material[3 * i]));
    f[3 * i].position.set(x - 1, y, z);

    //  Mid layer
    f.push(new THREE.Mesh(geometry, material[3 * i + 1]));
    f[3 * i + 1].position.set(x - 1, y, z - 1);

    //  Last layer
    f.push(new THREE.Mesh(geometry, material[3 * i + 2]));
    f[3 * i + 2].position.set(x - 1, y, z - 2);

    vector.push(new THREE.Vector3(x - 1, y, z));
    vector.push(new THREE.Vector3(x - 1, y, z - 1));
    vector.push(new THREE.Vector3(x - 1, y, z - 2));

    scene.add(f[3 * i]);
    scene.add(f[3 * i + 1]);
    scene.add(f[3 * i + 2])

    x = (x + 1) % 3;

}



// 

/**
 * Event Listener
 */


//  U  Rotation
document.getElementById('U').addEventListener('click', () => {
    const mesh = new THREE.Group();
    let uRot = []


    for (let i = 0; i < 27; i++) {
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)

        for (let j = 0; j < 9; j++) {
            if (Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z) {
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);

    gsap.to(mesh.rotation, 1, { y: mesh.rotation.y - Math.PI / 2 })

    setTimeout(() => {

        f.forEach((element, i) => {

            let quaternion = new THREE.Quaternion();
            scene.updateMatrixWorld(true);
            quaternion.setFromRotationMatrix(element.matrixWorld);
            element.quaternion.copy(quaternion);


            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            position1.setFromMatrixPosition(element.matrixWorld)
            element.position.copy(position1);

            scene.add(element);

        });
        scene.updateMatrixWorld(true);

    }, 1250)

})


//  D  Rotation

document.getElementById('D').addEventListener('click', () => {
    const mesh = new THREE.Group();
    let uRot = []


    for (let i = 0; i < 27; i++) {
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)

        for (let j = 18; j < 27; j++) {
            if (Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z) {
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);

    gsap.to(mesh.rotation, 1, { y: mesh.rotation.y + Math.PI / 2 })

    setTimeout(() => {

        f.forEach((element, i) => {

            let quaternion = new THREE.Quaternion();
            scene.updateMatrixWorld(true);
            quaternion.setFromRotationMatrix(element.matrixWorld);
            element.quaternion.copy(quaternion);


            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            position1.setFromMatrixPosition(element.matrixWorld)
            element.position.copy(position1);

            scene.add(element);

        });
        scene.updateMatrixWorld(true);

    }, 1250)
})

//  F  Rotation

document.getElementById('F').addEventListener('click', () => {
    const mesh = new THREE.Group();
    let uRot = []


    for (let i = 0; i < 27; i++) {
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)

        for (let j = 0; j < 9; j++) {
            if (Math.round(position.x) === vector[3 * j].x && Math.round(position.y) === vector[3 * j].y && Math.round(position.z) === vector[3 * j].z) {
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);

    gsap.to(mesh.rotation, 1, { z: mesh.rotation.z - Math.PI / 2 })

    setTimeout(() => {

        f.forEach((element, i) => {

            let quaternion = new THREE.Quaternion();
            scene.updateMatrixWorld(true);
            quaternion.setFromRotationMatrix(element.matrixWorld);
            element.quaternion.copy(quaternion);


            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            position1.setFromMatrixPosition(element.matrixWorld)
            element.position.copy(position1);

            scene.add(element);

        });
        scene.updateMatrixWorld(true);

    }, 1250)
})


// B rotation

document.getElementById('B').addEventListener('click', () => {
    const mesh = new THREE.Group();
    let uRot = []


    for (let i = 0; i < 27; i++) {
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)

        for (let j = 2; j < 27; j = j + 3) {
            if (Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z) {
                uRot.push(i);
            }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);

    gsap.to(mesh.rotation, 1, { z: mesh.rotation.z + Math.PI / 2 })

    setTimeout(() => {

        f.forEach((element, i) => {

            let quaternion = new THREE.Quaternion();
            scene.updateMatrixWorld(true);
            quaternion.setFromRotationMatrix(element.matrixWorld);
            element.quaternion.copy(quaternion);


            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            position1.setFromMatrixPosition(element.matrixWorld)
            element.position.copy(position1);

            scene.add(element);

        });
        scene.updateMatrixWorld(true);

    }, 1250)

})

// L rotation

document.getElementById('L').addEventListener('click', () => {
    const mesh = new THREE.Group();
    let uRot = []


    for (let i = 0; i < 27; i++) {
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)

        for (let j = 0; j < 27; j++) {
            if (j < 3 || j >= 9 && j < 12 || j >= 18 && j < 21)
                if (Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z) {
                    uRot.push(i);
                }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);

    gsap.to(mesh.rotation, 1, { x: mesh.rotation.x + Math.PI / 2 })

    setTimeout(() => {

        f.forEach((element, i) => {

            let quaternion = new THREE.Quaternion();
            scene.updateMatrixWorld(true);
            quaternion.setFromRotationMatrix(element.matrixWorld);
            element.quaternion.copy(quaternion);


            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            position1.setFromMatrixPosition(element.matrixWorld)
            element.position.copy(position1);

            scene.add(element);

        });
        scene.updateMatrixWorld(true);

    }, 1250)

})

// R rotation

document.getElementById('R').addEventListener('click', () => {
    const mesh = new THREE.Group();
    let uRot = []


    for (let i = 0; i < 27; i++) {
        scene.updateMatrixWorld(true);
        let position = new THREE.Vector3();
        position.setFromMatrixPosition(f[i].matrixWorld)

        for (let j = 0; j < 27; j++) {
            if (j >= 6 && j < 9 || j >= 15 && j < 18 || j >= 24 && j < 27)
                if (Math.round(position.x) === vector[j].x && Math.round(position.y) === vector[j].y && Math.round(position.z) === vector[j].z) {
                    uRot.push(i);
                }
        }
    }

    uRot.forEach(element => {
        mesh.add(f[element]);
    });

    scene.add(mesh);

    gsap.to(mesh.rotation, 1, { x: mesh.rotation.x - Math.PI / 2 })

    setTimeout(() => {

        f.forEach((element, i) => {

            let quaternion = new THREE.Quaternion();
            scene.updateMatrixWorld(true);
            quaternion.setFromRotationMatrix(element.matrixWorld);
            element.quaternion.copy(quaternion);


            let position1 = new THREE.Vector3();
            scene.updateMatrixWorld(true);
            position1.setFromMatrixPosition(element.matrixWorld)
            element.position.copy(position1);

            scene.add(element);

        });
        scene.updateMatrixWorld(true);

    }, 1250)

})


/** Button Disabled */

let handleDisable = () => {
    document.querySelectorAll('.button')[0].disabled = true;
    document.querySelectorAll('.button')[1].disabled = true;
    document.querySelectorAll('.button')[2].disabled = true;
    document.querySelectorAll('.button')[3].disabled = true;
    document.querySelectorAll('.button')[4].disabled = true;
    document.querySelectorAll('.button')[5].disabled = true;

    setTimeout(() => {
        document.querySelectorAll('.button')[0].disabled = false;
        document.querySelectorAll('.button')[1].disabled = false;
        document.querySelectorAll('.button')[2].disabled = false;
        document.querySelectorAll('.button')[3].disabled = false;
        document.querySelectorAll('.button')[4].disabled = false;
        document.querySelectorAll('.button')[5].disabled = false;
    }, 1250)
}

document.querySelectorAll('.button')[0].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[1].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[2].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[3].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[4].addEventListener('click', handleDisable)
document.querySelectorAll('.button')[5].addEventListener('click', handleDisable)




/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth * 0.7,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth * 0.7
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
camera.position.z = 12
camera.position.y = 5
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
renderer.setClearColor(0x222222, 1);
// renderer.setPixelRatio(2)

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
light.position.set( 0,0,8 );
scene.add( light );

const light1 = new THREE.PointLight( 0xffffff, 1, 100 );
light1.position.set( 0,0,8 );
light1.lookAt(new THREE.Vector3(0,0,0))
scene.add( light1 );

const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
light2.position.set( -8,0,0 );
light2.lookAt(new THREE.Vector3(0,0,0))
scene.add( light2 );

const light3 = new THREE.PointLight( 0xffffff, 1, 100 );
light3.position.set( 8,0,0 );
light3.lookAt(new THREE.Vector3(0,0,0))
scene.add( light3 );

const light4 = new THREE.PointLight( 0xffffff, 1, 100 );
light4.position.set( 0,0,-8 );
light4.lookAt(new THREE.Vector3(0,0,0))
scene.add( light4 );

const light5 = new THREE.PointLight( 0xffffff, 1, 100 );
light5.position.set( 0,8,0 );
light5.lookAt(new THREE.Vector3(0,0,0))
scene.add( light5 );

const light6 = new THREE.PointLight( 0xffffff, 1, 100 );
light6.position.set( 0,-8,0 );
light6.lookAt(new THREE.Vector3(0,0,0))
scene.add( light6 );

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