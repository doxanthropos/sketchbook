function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  noLoop();
}

function draw() {
  randomBackgroundGradient();
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
