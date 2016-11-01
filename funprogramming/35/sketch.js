var s = 0;
var r = 0;
var columns = 0;
var rows = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  //rectMode(CENTER);
  smooth();  
  noStroke();
}

function draw() {
  //background(255);
  s = map(mouseX,0,width,0,10);
  while (rows*50<=height){
  while (columns*50<=width){
    fill(255);
    stroke(0);
      push();
      translate(columns*50+25,rows*50+25);
      rotate(r+columns/s+rows/s);
      rect(0,0,35,35);
      pop();
    columns++;
  }
  columns = 0;
  rows++;
  }
  rows=0;
  r+=0.05;
}
