var r = 0;
var columns = 0;
var rows = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  rectMode(CENTER);
  smooth();  
}

function draw() {
  while (rows*50<=height){
  while (columns*50<=width){
    push()
    translate(columns*50+25,rows*50+25)
    rotate(r);
    rect(0,0,50,50);
    pop();
    columns++;
  }
  columns = 0;
  rows++;
  }
  rows=0;
  r = r + 0.05;
}