var t = 0;
var k = 4;
function setup() {
  createCanvas(500,500);
  background(0);
}

function draw() {
  translate(width/2,height/2);
  var x = cos(k * t) * cos(t)* width/2;
  var y = cos(k * t) * sin(t)* width/2;
  ellipse(x,y,5,5);
  t += 0.01;
}
