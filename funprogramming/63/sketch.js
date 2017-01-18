function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  background(255);
}

function draw() {
  background(255);
  translate(-width/2,-height/2);
  translate(mouseX,mouseY,map(noise(frameCount*0.01),0,1,0,-300));
  rotateY(frameCount*0.01);
  box(200,200,200);
}
