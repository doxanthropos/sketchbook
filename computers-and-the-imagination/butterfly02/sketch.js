var r;
var x;
var y;
var xx;
var yy;
var px;
var py;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  stroke(0);
  noLoop();
}

function draw() {
  background(255);
  butterfly(50,width/2,height/2);
}

function butterfly(bsize,bx,by){
  px = 0;
  py = 0;
  translate(bx,by);
  for(var theta = 0; theta < 100*PI; theta += 0.05){
    r = exp(cos(theta)) - 2 * cos(4 * theta) + Math.pow((sin(theta/12)),5);
    x = r * cos(theta);
    y = r * sin(theta);
    xx = (x * bsize);
    yy = (y * bsize);
    line(px,py,xx,yy);
    px = xx;
    py = yy;
  }  
}
