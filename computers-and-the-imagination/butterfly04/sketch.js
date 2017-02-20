var r;
var x;
var y;
var xx;
var yy;
var px;
var py;
var a = 10000;
function setup() {
  createCanvas(500,500);
  background(255);
  colorMode(HSB);
  //noLoop();
}

function draw() {
  background(255);
  butterfly(50,width/2,height/2,random(255));
}

function butterfly(bsize,bx,by,bcolor){
  px = 0;
  py = 0;

  translate(bx,by);
    rotate(-PI/2);
  for(var theta = 0; theta < 100*PI; theta += 0.05){
    r = exp(cos(theta)) - 2 * cos(4 * theta) + Math.pow((sin(theta/12)),5);
    x = r * cos(theta);
    y = r * sin(theta);
    xx = (x * bsize);
    yy = (y * bsize);
    noStroke();
    fill(noise(a)*255,255,255,0.08);
    console.log(noise(a)*255);
    triangle(px,py,xx,yy,0,0);
    px = xx;
    py = yy;
    a += 0.1;
  }
}
