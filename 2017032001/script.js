var video = document.querySelector("#videoElement");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
  console.log("No Video. So sad. :("); 
}
var c = document.querySelector("#c");
var ctx = c.getContext("2d");
var img = new Image();
img.addEventListener('load', function(){
  draw(img);
});
img.src = './wald.jpg';

function draw(img){
  c.width = img.width;
  c.height = img.height;
  ctx.drawImage(img,0,0);
}

function captureImage(){
  c.width = video.videoWidth;
  c.height = video.videoHeight;
  ctx.drawImage(video,0,0);
}

function showFile(){
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();
  reader.addEventListener("load", function(){
    console.log("New");
    img.src = reader.result;
    c.width = img.width;
    c.height = img.height;
    ctx.drawImage(img,0,0);
  }, false);

  if(file){
    reader.readAsDataURL(file);
  }
}

function reset(ctx){
  ctx.drawImage(img,0,0);
}

function grayscale(ctx){
  var pixels = ctx.getImageData(0,0,c.width,c.height);
  var data = pixels.data;
  for(var i = 0; i< pixels.data.length; i+=4){
    var average = (data[i] + data[i+1] + data[i+2]) / 3;
    data[i] = average;
    data[i+1] = average;
    data[i+2] = average;
    data[i+3] = 255;
  }
  ctx.putImageData(pixels,0,0);
}

function invert(ctx){
  var pixels = ctx.getImageData(0,0,c.width,c.height);
  var data = pixels.data;
  for(var i = 0; i< pixels.data.length; i+=4){
    data[i] = 255 - data[i];
    data[i+1] = 255 - data[i+1];
    data[i+2] = 255 - data[i+2];
    data[i+3] = 255;
  }
  ctx.putImageData(pixels,0,0);
}

function redGray(ctx){
  var pixels = ctx.getImageData(0,0,c.width,c.height);
  var data = pixels.data;
  for(var i = 0; i< pixels.data.length; i+=4){
    var average = (data[i] + data[i+1] + data[i+2]) / 3;
    if(data[i]>average){
      data[i+1] = average;
      data[i+2] = average
      data[i+3] = 255;
    } else {
      data[i] = average;
      data[i+1] = average;
      data[i+2] = average;
      data[i+3] = 255;
    }
  }
  ctx.putImageData(pixels,0,0);
}

function greenscreen(ctx){
  var pixels = ctx.getImageData(0,0,c.width,c.height);
  var data = pixels.data;
  for(var i = 0; i< pixels.data.length; i+=4){
    var average = (data[i] + data[i+1] + data[i+2]) / 3;
    if(i%8==0){
      data[i] = 0;
      data[i+1] = 0;
      data[i+2] = 0;
      data[i+3] = 255;
    } else {
      data[i] = 0;
      data[i+1] = average;
      data[i+2] = 0;
      data[i+3] = 255;
    }
  }
  ctx.putImageData(pixels,0,0);
}
