
var video = document.getElementById('video');
var canvasPic = document.getElementById('canvasPic');
var context = canvasPic.getContext('2d');
let cam = document.querySelector('.Camera_Modal');


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
    document.getElementById('img').classList.remove('none');
    document.getElementById('img').setAttribute('src',image)
    canvasPic.classList.add('none');
}

let handleSnap = () => {
    context.drawImage(video, 104, 24, 432, 432,0,0,432,432);
    convertCanvasToImage(canvasPic);
}


export {handleCamera , handleSnap};