var a = 0;
var b = 0;
var posX0 = [];
var posY0 = [];
var posX1 = [];
var posY1 = [];

var numberOfLines = 20;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  strokeWeight(1);
}

function draw() {
  background(0);
  stroke(255);
  posX0.push(map(sin(a), -1, 1, 20, width - 20));
  posY0.push(map(cos(a), -1, 1, 20, height - 20));
  
  posX1.push(map(sin(b), -1, 1, 20, width - 20));
  posY1.push(map(cos(b), -1, 1, 20, height - 20));
  if(posX0.length> numberOfLines){
    posX0.shift();
    posY0.shift();
    posX1.shift();
    posY1.shift();
  }
  for (var i = 0; i < posX0.length; i++){
    line(posX0[i],posY0[i],posX1[i],posY1[i]);
  }
  a = a + 0.03;
  b = b + 0.05;
}
