var a = 0;
var b = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  fill(0);
}

function draw() {
  clear();
  translate(-b,0);
    strokeWeight(1);
  stroke(0,100);
  for(var x = b; x <= b +width; x++){
    line(x-1,map(sin(((x-1)/30)*sin(x-1)),-1,1,0,height/2) + height/4,x,map(sin(((x)/30)*sin(x)),-1,1,0,height/2)+ height/4);
  }
  b++;
}