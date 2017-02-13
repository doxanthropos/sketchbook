var k1 = 3/5;
var k2 = 4/5;
function setup() {
  createCanvas(400,200);
  background(0);
  noStroke();
  noLoop();
}

function draw() {
  for(var t = 0;t<50;t+=0.01){
    push();
    translate(width/4,height/2);
    rose(k1,t,width/4);
    pop();
    push();
    translate(width/4*3,height/2);
    rose(k2,t,width/4);
    pop();
  }
  //  save("rose02.jpg");
}

function rose(k,t,r){
  var x = cos(k * t) * cos(t)* r;
  var y = cos(k * t) * sin(t)* r;
  ellipse(x,y,5,5);
}
