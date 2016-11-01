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

function draw() {
  fill(backR,backG,backB);
  rect(width/2,height/2,width,height);
  fill(255);
  translate(500,500);
  rotate(r);
  rect(0,0,100,100);
  r = r + 0.05;
  
}