var x;
var y;
var xoff = 0.01;
var yoff = 1.01;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  smooth();  
}

function draw() {
  background(255);
  x = map(noise(xoff),0.0,1.0,10,width-10);
  y = map(noise(yoff),0.0,1.0,10,width-10);
  ellipse(x,y,20,20);
  xoff+=0.01;
  yoff+=0.01;
}