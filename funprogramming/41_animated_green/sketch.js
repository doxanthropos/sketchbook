var amp;
var s = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  background(0);
  stroke(200,255,200);
  line(0,height/4,width,height/4);
  line(0,height/2,width,height/2);
  line(0,height/4*3,width,height/4*3);
  stroke(100,255,100);
  amp = noise(s/30) * height/2;
  for(var x = 0; x < width; x++){
    line(x-1,height/2 + amp * sin((x-1+s)/10),x,height/2 + amp * sin((x+s)/10));
    }

  s++;
}