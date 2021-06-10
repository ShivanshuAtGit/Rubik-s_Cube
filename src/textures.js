import * as THREE from 'three'

/*
* texture
*/

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/textures/pegatinaColor.png')

/**
 * Skybox
 */


 let materialArray = [];
 let texture_ft = new THREE.TextureLoader().load( '/textures/exosystem_ft.jpg');
 let texture_bk = new THREE.TextureLoader().load( '/textures/exosystem_bk.jpg');
 let texture_up = new THREE.TextureLoader().load( '/textures/exosystem_up.jpg');
 let texture_dn = new THREE.TextureLoader().load( '/textures/exosystem_dn.jpg');
 let texture_rt = new THREE.TextureLoader().load( '/textures/exosystem_rt.jpg');
 let texture_lf = new THREE.TextureLoader().load( '/textures/exosystem_lf.jpg',()=>{
   setTimeout(()=>{
    document.querySelector('.wrapper_loading').classList.add('load_none');
   },4000)
 });
   
 materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
 materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
 materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
 materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
 materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
 materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
    
 for (let i = 0; i < 6; i++)
   materialArray[i].side = THREE.BackSide;
    
 let skyboxGeo = new THREE.BoxGeometry( 100, 100, 100);
 let skybox = new THREE.Mesh( skyboxGeo, materialArray );

export {texture , skybox};