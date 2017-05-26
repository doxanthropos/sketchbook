var a = 0;
var b = 0;
var co = 0;
function setup() {
  createCanvas(500,400);
  background(255);
  colorMode(HSB,100);
  strokeWeight(3);
}

function draw() {
  var x0 = map(sin(a), -1, 1, 20, width - 20);
  var y0 = map(cos(a), -1, 1, 20, height - 20);
  
  var x1 = map(sin(b), -1, 1, 20, width - 20);
  var y1 = map(cos(b), -1, 1, 20, height - 20);
  
  stroke(co,100,100);
  line(x0,y0,x1,y1);
  a = a + 0.03;
  b = b + 0.05;
  co = co + 1;
  if (co > 100){ co = 0; }
  console.log(co);
}
