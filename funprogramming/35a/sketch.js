var r = 0;
var columns = 0;
var rows = 0;
var size = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  rectMode(CENTER);
  smooth();  
  noStroke();
}

function draw() {
  size = map(mouseX,0,width,-20,20);
  console.log(size);
  background(255);
  while (rows*50<=height){
  while (columns*50<=width){
    noFill();
    stroke(0);
      push();
      translate(columns*50+25,rows*50+25);
      if((columns%2==1&&rows%2==0)||(columns%2==0&&rows%2==1)){
      rotate(r);
      } else {
        rotate(-r);
      }
      rect(0,0,50+size,50+size);
      pop();
    columns++;
  }
  columns = 0;
  rows++;
  }
  rows=0;
  r+=0.05;
}