var r = 0;
var backR;
var backG;
var backB;
var fillR;
var fillG;
var fillB;

function setup() {
  createCanvas(windowWidth,windowHeight);
  backR = random(255);
  backG = random(255);
  backB = random(255);
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);
  background(backR,backG,backB);
  rectMode(CENTER);
  noStroke();
  smooth();
}
function rectangle(x,y,r){
  push();
  translate(x,y);
  rotate(r);
  rect(0,0,100,100);
  pop();  
}
function draw() {
  fill(backR,backG,backB,50);
  rect(width/2,height/2,width,height);
  fill(fillR,fillG,fillB);
  translate(mouseX,mouseY);
  rotate(r/2);
  // center
  rectangle(0,0,-r);
  // left top
  rectangle(-100,-100,r);
  // right top
  rectangle(100,-100,r);
  // left bottom
  rectangle(-100,100,r);
  // right bottom
  rectangle(100,100,r);
  r = r + 0.05;
}