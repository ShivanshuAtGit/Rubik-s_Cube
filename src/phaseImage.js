
var video = document.getElementById('video');
let videoWrapper = document.querySelector('.video_wrapper')
var canvasPic = document.getElementById('canvasPic');
var context = canvasPic.getContext('2d');
var snapWrapper = document.querySelector(".snap_wrapper");
let saveWrapper = document.querySelector(".save_wrapper");
let retryWrapper = document.querySelector('.retry_wrapper');
let cam = document.querySelector('.Camera_Modal');
let phaseImg = document.getElementById('img');
let acknowledgeWrapper = document.querySelector('.acknowledge_wrapper');
let camerWrapper = document.querySelector('.camera_wrapper');
let index = document.querySelector('.img_index')
var imgArr = [];
var recentImage;
let phase = ['upper', 'right', 'front', 'down', 'left', 'back'];

// aknowledge api function
let apiFetchResult = (img) =>{
    let strColor ;
    // strColor = callApi(img)

    // for testing purpose
    strColor = 'rbgowwyob';
    camerWrapper.classList.add('none')
    acknowledgeWrapper.classList.remove('none')

}

// Image Data Structure Updation
let storeImage = (image) => {
    recentImage = image;
    index.innerHTML = `snap ${phase[imgArr.length]} phase`
    console.log(imgArr.length)
}

// Button row Update
let buttonRowUpdation = (args) => {
    if (args === 'retry' || args === 'save') {
        snapWrapper.classList.remove('none')
        saveWrapper.classList.add('none')
        retryWrapper.classList.add('none')
    }
    else {
        snapWrapper.classList.add('none')
        saveWrapper.classList.remove('none')
        retryWrapper.classList.remove('none')
    }
}

let resetImgArr = () => {
    phaseImg.classList.add('none')
    imgArr = [];
    index.innerHTML = `snap ${phase[0]} phase`;
}

// Save
let handleSave = () =>{
    imgArr.push(recentImage); 
    apiFetchResult(recentImage)
    phaseImg.classList.add('none');
    videoWrapper.classList.remove('none')
    buttonRowUpdation('save') 
}

// Retry
let handleRetry = () => {
    phaseImg.classList.add('none');
    videoWrapper.classList.remove('none')
    buttonRowUpdation('retry')
}

// Back Button handler
let handleBackButton = () => {
    resetImgArr();
}


//  Camera Initiation
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

// Canvas to image converter
function convertCanvasToImage(canvasPic) {
    var image = new Image();
    image = canvasPic.toDataURL("image/png");
    videoWrapper.classList.add('none')
    phaseImg.classList.remove('none');
    phaseImg.setAttribute('src', image)
    buttonRowUpdation('snap');
    storeImage(image);
}

// Snap click function
let handleSnap = () => {
    context.drawImage(video, 104, 24, 432, 432, 0, 0, 432, 432);
    convertCanvasToImage(canvasPic);
}


export { handleCamera, handleSnap, handleBackButton, handleSave, handleRetry };