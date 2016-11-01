var r = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  rectMode(CENTER);
  smooth();
}
function rectangle(x,y,w,h,r){
  push();
  translate(x,y);
  rotate(r);
  rect(0,0,w,h);
  pop();  
}
function draw() {
  fill(255,5);
  rect(width/2,height/2,width,height);
  noFill();
  translate(width/2,height/2);
  push();
  rotate(r/2);
  // center
  //rectangle(0,0,-r);
  // left top
  rectangle(-100,-100,100,100,r);
  // right top
  rectangle(100,-100,100,100,r);
  // left bottom
  rectangle(-100,100,100,100,r);
  // right bottom
  rectangle(100,100,100,100,r);
  pop();
  push();
  rotate(-r/2);
  // center
  //rectangle(0,0,-r);
  // left top
  rectangle(-100,-100,100,100,r);
  // right top
  rectangle(100,-100,100,100,r);
  // left bottom
  rectangle(-100,100,100,100,r);
  // right bottom
  rectangle(100,100,100,100,r);
  pop();
  r = r + 0.05;
  console.log(r);
}