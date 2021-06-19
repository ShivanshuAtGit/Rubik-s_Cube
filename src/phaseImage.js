
var link = document.getElementById("snap");
var video = document.getElementById('video');
var canvasPic = document.getElementById('canvasPic');
var context = canvasPic.getContext('2d');
let cam = document.querySelector('.Camera_Modal');
let phaseImg = document.getElementById('img');
let re = document.querySelector('.re');
let sn = document.querySelector('.sn');
let sub= document.querySelector('.sub');
let btnsWrapper = document.querySelector(".snap_wrapper")
var imgArr = [];

let resetImgArr = ()=>{
    phaseImg.classList.add('none')
    re.classList.add('none')
    imgArr = [];
}

let handleRetry = ()=>{
    const val =imgArr.length
    imgArr.length =val -1;
    re.classList.add('none')
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
    console.log(imgArr.length)

    if(imgArr.length === 6){
        sn.classList.add('none');
        sub.classList.remove('none')
    }  
}

let handleSnap = () => {
    re.classList.remove('none')
    context.drawImage(video, 104, 24, 432, 432,0,0,432,432);
    convertCanvasToImage(canvasPic);
    
}


export {handleCamera , handleSnap, handleBackButton , resetImgArr, handleRetry};