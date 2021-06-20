
var link = document.getElementById("snap");
var video = document.getElementById('video');
var canvasPic = document.getElementById('canvasPic');
var context = canvasPic.getContext('2d');
let cam = document.querySelector('.Camera_Modal');
let phaseImg = document.getElementById('img');
let re = document.querySelector('.re');
let sn = document.querySelector('.sn');
let sub= document.querySelector('.sub');
let index = document.querySelector('.img_index')
var imgArr = [];
let phase = ['upper', 'right', 'front' ,'down' , 'left', 'back'];

let resetImgArr = ()=>{
    phaseImg.classList.add('none')
    re.classList.add('none')
    imgArr = [];
    index.innerHTML =`snap ${phase[0]} phase`;
}

let handleRetry = ()=>{
    imgArr.pop()
    re.classList.add('none')
    index.innerHTML =`snap ${phase[imgArr.length]} phase`
    if(imgArr.length < 6){
        sn.classList.remove('none');
        sub.classList.add('none')
    } 
    phaseImg.classList.add('none');
}

let handleBackButton = ()=>{
    resetImgArr();
    sn.classList.remove('none')
    sub.classList.add('none');
    cam.classList.add('none')
}

let handleCamera = () => {
    cam.classList.toggle('none')
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
        || navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||
        navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.srcObject = stream;
            video.play();
        });
    }
}

function convertCanvasToImage(canvasPic) {
    var image = new Image();
    image = canvasPic.toDataURL("image/png");
    phaseImg.classList.remove('none');
    phaseImg.setAttribute('src',image)
    canvasPic.classList.add('none');

    imgArr.push(image);
    index.innerHTML =`snap ${phase[imgArr.length]} phase`

    console.log(imgArr.length)
    if(imgArr.length >= 5){
        sn.classList.add('none');
        sub.classList.remove('none')
    } 
    else if(imgArr.length < 5){
        sn.classList.remove('none');
        sub.classList.add('none')
    } 
}

let handleSnap = () => {
    re.classList.remove('none')
    context.drawImage(video, 104, 24, 432, 432,0,0,432,432);
    convertCanvasToImage(canvasPic);
    
}


export {handleCamera , handleSnap, handleBackButton , resetImgArr, handleRetry};