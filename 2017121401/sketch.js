var angle = 0;
var grass;
var wood;

function preload(){
  grass = loadImage("grass.jpg");
  wood = loadImage("wood.jpg");
}
function setup() {
  createCanvas(500,500,WEBGL);
  background(0);
  console.log("Hello");
}
function draw() {
  //fill(100);
  push();
  rotateX(map(mouseX,0,width,0,2*PI)+angle);
  rotateY(map(mouseY,0,height,0,2*PI)+angle);
  translate(0,0);
  texture(wood);
  torus(100);
  pop();
  push();
  rotateX(PI/2.1);
  translate(0,0,120);
  texture(grass);
  plane(300);
  pop();
  angle += 0.05;

}
