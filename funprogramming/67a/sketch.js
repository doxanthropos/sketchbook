var a = 0;
var b = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  strokeWeight(1);
}

function draw() {
  noStroke();
  fill(0,5);
  rect(0,0,width,height);
  var x0 = map(sin(a), -1, 1, 20, width - 20);
  var y0 = map(cos(a), -1, 1, 20, height - 20);
  
  var x1 = map(sin(b), -1, 1, 20, width - 20);
  var y1 = map(cos(b), -1, 1, 20, height - 20);
  
  stroke(255);
  line(x0,y0,x1,y1);
  a = a + 0.03;
  b = b + 0.05;
}
