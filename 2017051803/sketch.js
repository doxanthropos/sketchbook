var startR;
var startG;
var startB;
var stopR;
var stopG;
var stopB;
function setup() {
  createCanvas(windowWidth,windowHeight);
  randomBackgroundGradient();
  randomColors();
}

function draw() {
  stroke(map(sin(frameCount/150),-1,1,0,255));
  translate(width/2,height/2);
  var radius = min(width,height) / 2.2;
  line(sin(frameCount/150)* radius, cos(frameCount/150) * radius, 0,0);
}

function randomBackgroundGradient(){
  backgroundGradient(random(255),random(255),random(255),random(255),random(255),random(255));
}

function backgroundGradient(startRed,startGreen,startBlue,stopRed,stopGreen,stopBlue){
  for(var i = 0; i < height; i ++){
    stroke(
      map(i,0,width,startRed,stopRed),
      map(i,0,width,startGreen,stopGreen),
      map(i,0,width,startBlue,stopBlue));
    line(0,i,width,i);
  }  
}

function randomColors(){
  startR = random(255);
  startG = random(255);
  startB = random(255);
  stopR = random(255);
  stopG = random(255);
  stopB = random(255);
}
