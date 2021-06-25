import * as THREE from 'three'
import {frontColor , upperColor, downColor , rightColor,leftColor , backColor} from './phaseColors'
import {texture} from './textures'


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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[2] }))
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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[1] }))
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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[0] }))
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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[5] }))
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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[3] }))
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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[8] }))
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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[7] }))
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
 matList.push(new THREE.MeshStandardMaterial({metalness: 1, roughness:.6, map: texture, color: backColor[6] }))
 material.push(matList);
 matList = [];
 
 
 export default material;