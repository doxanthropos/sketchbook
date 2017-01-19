var x = 0;
var y = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  fill(255,0,0);
  noStroke();
}

function draw() {
  background(255);
  ellipse(x,y,20,20);
  x = lerp(x,mouseX,0.1);
  y = lerp(y,mouseY,0.1);
}
