var t = 0;
var k = 4;
function setup() {
  createCanvas(500,500);
  background(0);
  noStroke();
}

function draw() {
  translate(width/2,height/2);
  var x = cos(4 * t) * cos(t)* width/2;
  var y = cos(9 * t) * sin(t)* width/2;
  ellipse(x,y,5,5);
  t += 0.01;
}
