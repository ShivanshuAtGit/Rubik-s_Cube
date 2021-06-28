import { imposeColor } from "./phaseColors";

let page1 = document.querySelector('.page1');
let page2 = document.querySelector('.page2');
let page3 = document.querySelector('.page3');
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
let ackHead = document.querySelector('.aklg_heading');
let acknowledgeWrapper = document.querySelector('.acknowledge_wrapper');
let camerWrapper = document.querySelector('.camera_wrapper');
let colorBoxes = document.getElementsByClassName('grid-item')
let fileImage = document.getElementById('myFile');
let imgName = document.querySelector('.imgName');
var imgArr = [];
var recentImage;
let phaseColorsArray = []
let phase = ['Upper', 'Right', 'Front', 'Down', 'Left', 'Back'];
let solveString = '';
let solution

// Move Page to Solve
let renderMovePage = () => {
    page1.classList.add('none');
    page2.classList.add('none');
    page3.classList.remove('none');
}


// Button row Update
let buttonRowUpdation = (args) => {
    if (args === 'retry' || args === 'save') {
        snapWrapper.classList.remove('none')
        saveWrapper.classList.add('none')
        retryWrapper.classList.add('none')
        submitWrapper.classList.add('none')
    }
    else {
        snapWrapper.classList.add('none')
        saveWrapper.classList.remove('none')
        retryWrapper.classList.remove('none')
        submitWrapper.classList.add('none')
        imgName.innerHTML = `Submit your Collection`

    }

    if (imgArr.length >= 6) {
        snapWrapper.classList.add('none')
        saveWrapper.classList.add('none')
        retryWrapper.classList.add('none')
        submitWrapper.classList.remove('none')
    }

}

// Reset Capture block
let resetImgArr = () => {
    videoWrapper.classList.remove('none')
    phaseImg.classList.add('none')
    imgArr = [];
    imgName.innerHTML = `Take Snap of ${phase[imgArr.length]} Phase`
    buttonRowUpdation('retry')
    cam.classList.toggle('none')
    solveString=''
}

// Submit Click
let handleSubmit =async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "cube": ""+solveString+""
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    document.querySelector('.loader_wrapper').classList.remove('none')
    await fetch("https://therubiksolver.herokuapp.com/solver/solve/", requestOptions)
      .then(response => response.text())
      .then(result => {
          solution = JSON.parse(result).rotation;
          console.log(solution)
          document.querySelector('.loader_wrapper').classList.add('none')
        })
      .catch(error => console.log('error', error));

    imposeColor(phaseColorsArray)     // 1. Impose Color on 3D cube
    resetImgArr();                     // 2. Reset Datastructure and UI
    renderMovePage();                   // 3. Move page to solve cube

}

//  String to Color
let converStringToColor = (str) => {
    var colorPallet = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'r')
            colorPallet.push('#c01629');
        else if (str[i] === 'b')
            colorPallet.push('#053c99');
        else if (str[i] === 'g')
            colorPallet.push('#027414');
        else if (str[i] === 'o')
            colorPallet.push('#e95608');
        else if (str[i] === 'w')
            colorPallet.push('#dae8e8');
        else if (str[i] === 'y')
            colorPallet.push('#dbb60d');
    }
    return colorPallet;
}


// confirm button
let handleConfirm = () => {
    let arr = []
    for (let box of colorBoxes) {
        arr.push(box.style.backgroundColor)
    }
    phaseColorsArray.push(arr);
    camerWrapper.classList.remove('none')
    acknowledgeWrapper.classList.add('none')
    if (imgArr.length === 6)
        imgName.innerHTML = `Submit Your Collections`
}

// aknowledge api function
let apiFetchResult =async (img) => {
    let strColor;
    let i = 0;
    if (img === 'manual')
        strColor = 'wwwwwwwww';
    else {
        var formdata = new FormData();
        formdata.append("data", img);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        document.querySelector('.loader_wrapper').classList.remove('none')
        await fetch("https://therubiksolver.herokuapp.com/solver/InputStream/", requestOptions)
            .then(response => response.text())
            .then(result =>{ 
                strColor= JSON.parse(result).data
                document.querySelector('.loader_wrapper').classList.add('none')
            })
            .catch(error => console.log('error', error));
    }

    solveString += strColor;
    console.log(solveString)
    // update UI
    phaseImg.classList.add('none');
    videoWrapper.classList.remove('none')
    imgName.innerHTML = `Take Snap of ${phase[imgArr.length]} Phase`
    buttonRowUpdation('save')
    console.log(imgArr.length)

    camerWrapper.classList.add('none')
    ackHead.innerHTML = `Acknowledge For ${phase[imgArr.length - 1]} Phase`
    acknowledgeWrapper.classList.remove('none')
    let colorPallet = converStringToColor(strColor)
    for (let box of colorBoxes) {
        box.style.backgroundColor = colorPallet[i++];
    }
}

// Image Data Structure Updation
let storeImage = (image) => {
    recentImage = image;
}


// Save
let handleSave = () => {
    imgArr.push(recentImage);
    apiFetchResult(recentImage)

}

// Manual Uploading
let handleManual = () => {
    imgArr.push('manual');
    apiFetchResult('manual')
    imgName.innerHTML = `Take Snap of ${phase[imgArr.length]} Phase`
    setTimeout(() => {
        buttonRowUpdation('save')
    }, 0)
    console.log(imgArr.length)

}

// Retry
let handleRetry = () => {
    phaseImg.classList.add('none');
    videoWrapper.classList.remove('none')
    imgName.innerHTML = `Take Snap of ${phase[imgArr.length]} Phase `
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

// Convert Images to dataUrl
let convertImagetoDataurl = (input) => {
    var src, value;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.addEventListener(
            "load",
            function () {
                var avatarImg = new Image();
                src = reader.result;
                avatarImg.src = src;
                phaseImg.setAttribute('src', src)
                buttonRowUpdation('snap');
                storeImage(src);
            },
            false
        );
        reader.readAsDataURL(input.files[0]);
    }

}


// uplOad Image
let uploadImage = () => {
    // var image = new Image();
    convertImagetoDataurl(fileImage);

    videoWrapper.classList.add('none')
    phaseImg.classList.remove('none');


    fileImage.value = null;
    document.getElementById('upload_submit').disabled = true;

}

// Snap click function
let handleSnap = () => {
    context.drawImage(video, 104, 24, 432, 432, 0, 0, 432, 432);
    convertCanvasToImage(canvasPic);
    imgName.innerHTML = `${phase[imgArr.length]} Phase`
}


export { handleManual, uploadImage, handleCamera, handleSnap, handleBackButton, handleSave, handleRetry, handleConfirm, handleSubmit };