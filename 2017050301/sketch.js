var c1 = 0.4;
var c2 = 0.9;
var c3 = 6.0;
var rho = 1.0;

function setup() {
  createCanvas(500,500);
  background(255);
  stroke(0);
  strokeWeight(5);
  noLoop();
}

function draw() {
  var x = 0.1;
  var y = 0.1;
  for (var i = 0; i <= 3000; i++){
    var temp = c1 - c3 / (1.0 + x * x + y * y);
    var sin_temp = sin(temp);
    var cos_temp = cos(temp);
    var xt = rho + c2 * (x * cos_temp - y * sin_temp);
    y = c2 * (x * sin_temp + y * cos_temp);
    x = xt;
    point(x * 150 + 150, y * 150 + 350);
  }
}
