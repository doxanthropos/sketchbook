var a = 0;
function setup() {
  createCanvas(500,500);
  background(0);
  colorMode(HSB,100);
  stroke(100,100,100);
  //noLoop();
}

function draw() {
  background(0,1);
  var x = map(sin(a)*sin(a*3), -1, 1, 10, width-10);
  var y = map(sin(a+2)*sin(a*4), -1, 1, 10, height-10);
  noStroke();
  fill(100,100,100);
  ellipse(x,y,10,10);
  a = a + 0.05;
  if(frameCount == 300){
    saveCanvas("dot","png");
  }
}
