var r = 0;
var columns = 0;
var rows = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  rectMode(CENTER);
  smooth();  
  noStroke();
  frameRate(3);
}

function draw() {
  noStroke();
  fill(0,30);
  rect(width/2,height/2,width,height);
  stroke(255);
  while (rows*50<=height){
  while (columns*50<=width){
    if(random(10)>5){
      fill(random(200),0,0)
    } else {
    fill(random(150));
    }
    if(random(10)>9){
      ellipse(columns*50+25,rows*50+25,48,48);
    } else {
      rect(columns*50+25,rows*50+25,48,48);
    }
    columns++;
  }
  columns = 0;
  rows++;
  }
  rows=0;
}