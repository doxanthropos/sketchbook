var yoff = 0;
var r = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  colorMode(HSB);
}

function draw() {
  fill(0);
  rect(0,0,width,height);
  translate(width/2,height/2);
  rotate(r);
  var x = 0;
  while(x<width){
    fill(noise(x*0.001,yoff)*255,255,255);
    ellipse(x-width/2,noise(x*0.001,yoff)*height-height/2,20,20);
    x = x + 40;
  }
  yoff += 0.006;
  r += 0.01;
}