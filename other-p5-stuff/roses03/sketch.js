var k1 = 3/5;
var k2 = 4/5;
function setup() {
  createCanvas(500,500);
  background(255);
  fill(0);
  noStroke();
  //noLoop();
}

function draw() {
  background(255);
  for(var t = 0;t<50;t+=0.01){
    push();
    translate(width/2,height/2);
    rose(k1,t,width/2-50);
    pop();
  }
  k1 += 0.01;
  //  save("rose02.jpg");
}

function rose(k,t,r){
  var x = cos(k * t) * cos(t)* r;
  var y = cos(k * t) * sin(t)* r;
  ellipse(x,y,5,5);
}
