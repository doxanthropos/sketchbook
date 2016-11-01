var z = 0.0;
var xoff = 0.01;
var yoff = 1.01;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  smooth();
}

function draw() {
  background(255);
  x = map(noise(xoff),0.0,1.0,10,width-10);
  y = map(noise(yoff),0.0,1.0,10,width-10);
  xoff+=0.01;
  yoff+=0.01;
  for(x=0;x<=width;x++){
    for(y=0;y<=height;y++){
      stroke(map(noise(x/50,y/50,z),0.0,1.0,0,255));
      point(x,y);
    }
  }
  z+=0.03;
}