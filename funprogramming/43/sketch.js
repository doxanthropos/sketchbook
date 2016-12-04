var a = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  fill(0);
  noStroke();
  smooth();
}

function draw() {
  background(255);
  ellipse(random(width),height/4,height/10,height/10);
  ellipse(noise(a)*width,height/2,height/10,height/10);
  ellipse(map(sin(a),(-1),1,0,width),height/4*3,height/10,height/10);
  a = a + 0.03;
}