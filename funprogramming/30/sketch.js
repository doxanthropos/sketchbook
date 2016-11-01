var r = 0;
var backR;
var backG;
var backB;

function setup() {
  createCanvas(windowWidth,windowHeight);
  backR = random(255);
  backG = random(255);
  backB = random(255);
  background(backR,backG,backB);
  rectMode(CENTER);
  noStroke();
  smooth();
}
function rectangle(x,y,r){
  translate(x,y);
  rotate(r);
  rect(0,0,100,100);
  resetMatrix();  
}
function draw() {
  fill(backR,backG,backB);
  rect(width/2,height/2,width,height);
  fill(255);
  // left top
  rectangle(width/4,height/4,r);
  // right top
  rectangle(width/4*3,height/4,-r);
  // left bottom
  translate(width/4,height/4*3);
  rotate(-r);
  rect(0,0,100,100);
  resetMatrix();
  // right bottom
  translate(width/4*3,height/4*3);
  rotate(r);
  rect(0,0,100,100);
  resetMatrix();
  r = r + 0.05;
}