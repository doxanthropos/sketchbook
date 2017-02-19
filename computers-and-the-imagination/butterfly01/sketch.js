var r;
var x;
var y;
var xx;
var yy;
function setup() {
  createCanvas(500,500);
  background(255);
  stroke(0);
  noLoop();
}

function draw() {
  for(var theta = 0; theta < 100*PI; theta += 0.01){
    r = exp(cos(theta)) - 2 * cos(4 * theta) + Math.pow((sin(theta/12)),5);
    x = r * cos(theta);
    y = r * sin(theta);
    xx = (x * 60) + width/2;
    yy = (y * 60) + height/2;
    point(xx,yy);
  }
}
