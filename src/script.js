import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import material from './material'
import {skybox} from './textures'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * geometry
 */
const geometry = new THREE.BoxBufferGeometry(1, 1, 1)



// faces

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



/**
 * Event Listener
 */

function gsapRotation(meshElement,dur ,rot){
    gsap.to(meshElement.rotation, dur ,rot)
}

function fixMatrix(dur){
    setTimeout(() => {

        f.forEach((element) => {

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

    }, dur)
}


//  U  Rotation
let uRotation= () => {
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
    gsapRotation(mesh , 1 , { y: mesh.rotation.y - Math.PI / 2 });
    fixMatrix(1250);

}


//  D  Rotation
let dRotation= () => {
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

    gsapRotation(mesh , 1 , { y: mesh.rotation.y + Math.PI / 2 });
    fixMatrix(1250);
}


//  F  Rotation
let fRotation= () => {
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
    gsapRotation(mesh , 1 , { z: mesh.rotation.z - Math.PI / 2 });
    fixMatrix(1250);

}


// B rotation
let bRotation= () => {
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
    gsapRotation(mesh , 1 , { z: mesh.rotation.z + Math.PI / 2 });
    fixMatrix(1250);

}


// L rotation
let lRotation= () => {
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

    gsapRotation(mesh , 1 , { x: mesh.rotation.x + Math.PI / 2 });
    fixMatrix(1250);

}


// R rotation
let rRotation= () => {
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

    gsapRotation(mesh , 1 , { x: mesh.rotation.x - Math.PI / 2 });
    fixMatrix(1250);

}


/**
 * Inverse Events
 */


//  U'  Rotation
let urRotation= () => {
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

    gsapRotation(mesh , 1 , { y: mesh.rotation.y + Math.PI / 2 });
    fixMatrix(1250);

}


//  D'  Rotation

let drRotation= () => {
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

    gsapRotation(mesh , 1 , { y: mesh.rotation.y - Math.PI / 2 });
    fixMatrix(1250);

}


//  F'  Rotation
let frRotation= () => {
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

    gsapRotation(mesh , 1 , { z: mesh.rotation.z + Math.PI / 2 });
    fixMatrix(1250);

}


// B' rotation
let brRotation=() => {
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

    gsapRotation(mesh , 1 , { z: mesh.rotation.z - Math.PI / 2 });
    fixMatrix(1250);

}


// L' rotation
let lrRotation= () => {
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

    gsapRotation(mesh , 1 , { x: mesh.rotation.x - Math.PI / 2 });
    fixMatrix(1250);

}


// R' rotation
let rRRotation=() => {
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

    gsapRotation(mesh , 1 , { x: mesh.rotation.x + Math.PI / 2 });
    fixMatrix(1250);

}


/**
 * 180 Rotation Events
 */

//  U2  Rotation
let uuRotation= () => {
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

    gsapRotation(mesh , 1.2 , { y: mesh.rotation.y - Math.PI });
    fixMatrix(1250);

}


//  D2  Rotation
let ddRotation= () => {
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

    gsapRotation(mesh , 1.2 , { y: mesh.rotation.y + Math.PI });
    fixMatrix(1250);
}


//  F2  Rotation
let ffRotation= () => {
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

    gsapRotation(mesh , 1.2 , { z: mesh.rotation.z - Math.PI });
    fixMatrix(1250);
}


// B2 rotation
let bbRotation= () => {
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

    gsapRotation(mesh , 1.2 , { z: mesh.rotation.z + Math.PI });
    fixMatrix(1250);
}


// L2 rotation
let llRotation= () => {
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

    gsapRotation(mesh , 1.2 , { x: mesh.rotation.x + Math.PI });
    fixMatrix(1250);

}


// R2 rotation
let rrRotation= () => {
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

    gsapRotation(mesh , 1.2 , { x: mesh.rotation.x - Math.PI });
    fixMatrix(1250);
}





/** Button Disabled */

let handleDisable = () => {
    for(let i=0;i<18;i++)
        document.querySelectorAll('.button')[i].disabled = true;

    setTimeout(() => {
        for(let i=0;i<18;i++)
        document.querySelectorAll('.button')[i].disabled = false;
    }, 1250)
}



/**
 *  Rotation Event Listener
 */

document.getElementById('U').addEventListener('click',uRotation)
document.getElementById('D').addEventListener('click',dRotation)
document.getElementById('F').addEventListener('click',fRotation)
document.getElementById('B').addEventListener('click',bRotation)
document.getElementById('L').addEventListener('click',lRotation)
document.getElementById('R').addEventListener('click',rRotation)

document.getElementById('U-r').addEventListener('click',urRotation)
document.getElementById('D-r').addEventListener('click',drRotation)
document.getElementById('F-r').addEventListener('click',frRotation)
document.getElementById('B-r').addEventListener('click',brRotation)
document.getElementById('L-r').addEventListener('click',lrRotation)
document.getElementById('R-r').addEventListener('click',rRRotation)

document.getElementById('U-2').addEventListener('click',uuRotation)
document.getElementById('D-2').addEventListener('click',ddRotation)
document.getElementById('F-2').addEventListener('click',ffRotation)
document.getElementById('B-2').addEventListener('click',bbRotation)
document.getElementById('L-2').addEventListener('click',llRotation)
document.getElementById('R-2').addEventListener('click',rrRotation)


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
 * Sizes
 */
const sizes = {
    width: window.innerWidth ,
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

const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight1.position.set(0,0,8)
scene.add( directionalLight1 );

const light2 = new THREE.DirectionalLight( 0xffffff, 1);
light2.position.set( -8,0,0 );
scene.add( light2 );

const light3 = new THREE.DirectionalLight( 0xffffff, 1);
light3.position.set( 8,0,0 );
scene.add( light3 );

const light4 = new THREE.DirectionalLight( 0xffffff, 1);
light4.position.set( 0,0,-8 );
scene.add( light4 );

const light5 = new THREE.DirectionalLight( 0xffffff, 1);
light5.position.set( 0,8,0 );
scene.add( light5 );

const light6 = new THREE.DirectionalLight( 0xffffff, 1);
light6.position.set( 0,-8,0 );
scene.add( light6 );


/**
 * Skybox
 */
 scene.add( skybox );

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