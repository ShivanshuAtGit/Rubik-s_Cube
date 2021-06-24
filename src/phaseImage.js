
var video = document.getElementById('video');
let videoWrapper = document.querySelector('.video_wrapper')
var canvasPic = document.getElementById('canvasPic');
var context = canvasPic.getContext('2d');
var snapWrapper = document.querySelector(".snap_wrapper");
let saveWrapper = document.querySelector(".save_wrapper");
let retryWrapper = document.querySelector('.retry_wrapper');
let submitWrapper = document.querySelector('.submit_wrapper');
let cam = document.querySelector('.Camera_Modal');
let phaseImg = document.getElementById('img');
let acknowledgeWrapper = document.querySelector('.acknowledge_wrapper');
let camerWrapper = document.querySelector('.camera_wrapper');
let colorBoxes = document.getElementsByClassName('grid-item')
let imgName = document.querySelector('.imgName');
var imgArr = [];
var recentImage;

let phase = ['upper', 'right', 'front', 'down', 'left', 'back'];

// Submit Click

let handleSubmit = () =>{
    console.log('submitted')
}

//  String to Color
let converStringToColor = (str) =>{
    var colorPallet =[]
    for(let i=0;i<str.length;i++){
        if(str[i]=== 'r')
          colorPallet.push('#c01629');
        else if(str[i]=== 'b')
        colorPallet.push('#053c99');
        else if(str[i]=== 'g')
        colorPallet.push('#027414');
        else if(str[i]=== 'o')
        colorPallet.push('#e95608');
        else if(str[i]=== 'w')
        colorPallet.push('#dae8e8');
        else if(str[i]=== 'y')
        colorPallet.push('#dbb60d');
        
    }
    return colorPallet;
}


// confirm button
let handleConfirm = () =>{
    camerWrapper.classList.remove('none')
    acknowledgeWrapper.classList.add('none')
}

// aknowledge api function
let apiFetchResult = (img) =>{
    let strColor ;
    let i=0;
    // strColor = callApi(img)
    strColor = 'rbgowwyob';    // for testing purpose

    camerWrapper.classList.add('none')
    acknowledgeWrapper.classList.remove('none')
    let colorPallet= converStringToColor(strColor)
    for(let box of colorBoxes){
        box.style.backgroundColor = colorPallet[i++];
    }
}

// Image Data Structure Updation
let storeImage = (image) => {
    recentImage = image;
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

    if(imgArr.length >= 6){
        snapWrapper.classList.add('none')
        saveWrapper.classList.add('none')
        retryWrapper.classList.add('none')
        submitWrapper.classList.remove('none')
    }
    
}

let resetImgArr = () => {
    phaseImg.classList.add('none')
    imgArr = [];
}

// Save
let handleSave = () =>{
    imgArr.push(recentImage); 
    apiFetchResult(recentImage)
    phaseImg.classList.add('none');
    videoWrapper.classList.remove('none')
    
    setTimeout(()=>{
     buttonRowUpdation('save') 
    },0)
    console.log(imgArr.length)
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


export { handleCamera, handleSnap, handleBackButton, handleSave, handleRetry ,handleConfirm,handleSubmit};