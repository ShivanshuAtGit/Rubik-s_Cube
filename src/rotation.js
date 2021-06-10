import * as THREE from 'three'
import scene from './scene'
import gsap from 'gsap'
import material from './material'



/**
 * geometry
 */
 const geometry = new THREE.BoxBufferGeometry(1, 1, 1)

 // faces
 
 let f = [], vector = [];

 let x1 , y1, z1;
 let sign = [-1,1]

 for (let i = 0; i < 9; i++) {
    
    x1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];
    y1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];
    z1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];

    //  Front layer
    f.push(new THREE.Mesh(geometry, material[3 * i]));
    f[3 * i].position.set(x1,y1,z1);

    x1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];
    y1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];
    z1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];

    //  Mid layer
    f.push(new THREE.Mesh(geometry, material[3 * i + 1]));
    f[3 * i + 1].position.set(x1,y1,z1);

    x1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];
    y1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];
    z1 = (Math.random() * 40 + 1) * sign[Math.round(Math.random()* 1)];

    //  Last layer
    f.push(new THREE.Mesh(geometry, material[3 * i + 2]));
    f[3 * i + 2].position.set(x1,y1,z1);

    scene.add(f[3 * i]);
    scene.add(f[3 * i + 1]);
    scene.add(f[3 * i + 2])

}


let x2 = 0, y2 = 2, z2 = 1;

 for (let i = 0; i < 9; i++) {
    if (i % 3 === 0)
        y2--;

    //  Front layer
    gsap.to(f[3 * i].position, 1.3 ,{ x: x2 -1 })
    gsap.to(f[3 * i].position, 1.3 ,{ y: y2 })
    gsap.to(f[3 * i].position, 1.3 ,{ z: z2  })

    //  Mid layer
    gsap.to(f[3 * i + 1].position, 1.3 ,{ x: x2 -1 })
    gsap.to(f[3 * i + 1].position, 1.3 ,{ y: y2 })
    gsap.to(f[3 * i + 1].position, 1.3 ,{ z: z2 -1  })

    //  Last layer
    gsap.to(f[3 * i + 2].position, 1.3 ,{ x: x2 -1 })
    gsap.to(f[3 * i + 2].position, 1.3 ,{ y: y2 })
    gsap.to(f[3 * i + 2].position, 1.3 ,{ z: z2 -2  })

    setTimeout(()=>{

        let position1 = new THREE.Vector3();
        scene.updateMatrixWorld(true);
        position1.setFromMatrixPosition(f[3 * i].matrixWorld)
        f[3 * i].position.copy(position1);

        position1 = new THREE.Vector3();
        scene.updateMatrixWorld(true);
        position1.setFromMatrixPosition(f[3 * i + 1].matrixWorld)
        f[3 * i + 1].position.copy(position1);

        position1 = new THREE.Vector3();
        scene.updateMatrixWorld(true);
        position1.setFromMatrixPosition(f[3 * i + 2].matrixWorld)
        f[3 * i + 2].position.copy(position1);

    },1500)

    vector.push(new THREE.Vector3(x2 - 1, y2, z2));
    vector.push(new THREE.Vector3(x2 - 1, y2, z2 - 1));
    vector.push(new THREE.Vector3(x2 - 1, y2, z2 - 2));

    scene.add(f[3 * i]);
    scene.add(f[3 * i + 1]);
    scene.add(f[3 * i + 2]);

    x2 = (x2 + 1) % 3;

}


 
//  for (let i = 0; i < 9; i++) {
//      if (i % 3 === 0)
//          y--;
 
//      //  Front layer
//      f.push(new THREE.Mesh(geometry, material[3 * i]));
//      f[3 * i].position.set(x - 1, y, z);
 
//      //  Mid layer
//      f.push(new THREE.Mesh(geometry, material[3 * i + 1]));
//      f[3 * i + 1].position.set(x - 1, y, z - 1);
 
//      //  Last layer
//      f.push(new THREE.Mesh(geometry, material[3 * i + 2]));
//      f[3 * i + 2].position.set(x - 1, y, z - 2);
 
//      vector.push(new THREE.Vector3(x - 1, y, z));
//      vector.push(new THREE.Vector3(x - 1, y, z - 1));
//      vector.push(new THREE.Vector3(x - 1, y, z - 2));
 
//      scene.add(f[3 * i]);
//      scene.add(f[3 * i + 1]);
//      scene.add(f[3 * i + 2])
 
//      x = (x + 1) % 3;
 
//  }

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
let uRotation= (aDur,uDur) => {
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
    gsapRotation(mesh , aDur , { y: mesh.rotation.y - Math.PI / 2 });
    fixMatrix(uDur);

}


//  D  Rotation
let dRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { y: mesh.rotation.y + Math.PI / 2 });
    fixMatrix(uDur);
}


//  F  Rotation
let fRotation= (aDur,uDur) => {
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
    gsapRotation(mesh , aDur , { z: mesh.rotation.z - Math.PI / 2 });
    fixMatrix(uDur);

}


// B rotation
let bRotation= (aDur,uDur) => {
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
    gsapRotation(mesh , aDur , { z: mesh.rotation.z + Math.PI / 2 });
    fixMatrix(uDur);

}


// L rotation
let lRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { x: mesh.rotation.x + Math.PI / 2 });
    fixMatrix(uDur);

}


// R rotation
let rRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { x: mesh.rotation.x - Math.PI / 2 });
    fixMatrix(uDur);

}


/**
 * Inverse Events
 */


//  U'  Rotation
let urRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { y: mesh.rotation.y + Math.PI / 2 });
    fixMatrix(uDur);

}


//  D'  Rotation

let drRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { y: mesh.rotation.y - Math.PI / 2 });
    fixMatrix(uDur);

}


//  F'  Rotation
let frRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { z: mesh.rotation.z + Math.PI / 2 });
    fixMatrix(uDur);

}


// B' rotation
let brRotation=(aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { z: mesh.rotation.z - Math.PI / 2 });
    fixMatrix(uDur);

}


// L' rotation
let lrRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { x: mesh.rotation.x - Math.PI / 2 });
    fixMatrix(uDur);

}


// R' rotation
let rRRotation=(aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { x: mesh.rotation.x + Math.PI / 2 });
    fixMatrix(uDur);

}


/**
 * 180 Rotation Events
 */

//  U2  Rotation
let uuRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { y: mesh.rotation.y - Math.PI });
    fixMatrix(uDur);

}


//  D2  Rotation
let ddRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur, { y: mesh.rotation.y + Math.PI });
    fixMatrix(uDur);
}


//  F2  Rotation
let ffRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { z: mesh.rotation.z - Math.PI });
    fixMatrix(uDur);
}


// B2 rotation
let bbRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { z: mesh.rotation.z + Math.PI });
    fixMatrix(uDur);
}


// L2 rotation
let llRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { x: mesh.rotation.x + Math.PI });
    fixMatrix(uDur);

}


// R2 rotation
let rrRotation= (aDur,uDur) => {
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

    gsapRotation(mesh , aDur , { x: mesh.rotation.x - Math.PI });
    fixMatrix(uDur);
}

export {uRotation , dRotation , fRotation ,bRotation, lRotation ,rRotation,
                urRotation, drRotation, frRotation,brRotation, lrRotation, rRRotation,
                uuRotation, ddRotation , ffRotation , bbRotation , llRotation , rrRotation };