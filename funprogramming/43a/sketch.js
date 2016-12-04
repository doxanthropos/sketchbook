var a = 0;
var b = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  fill(0);
}

function draw() {
  clear();
    strokeWeight(1);
  stroke(0,150);
  for(var x = 0; x <= width; x++){
    line(x-1,map(sin(((x-1+b)/30)),-1,1,0,height/2) + height/4,x,map(sin(((x+b)/30)),-1,1,0,height/2)+ height/4);
  }
  stroke("red");
  strokeWeight(5);
  point(width/2,map(sin((((width/2)+b)/30)),-1,1,0,height/2)+ height/4);
  b++;
}