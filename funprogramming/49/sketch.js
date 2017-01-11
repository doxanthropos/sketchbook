var img;
var r = 1;
function preload() {
  img = loadImage("./grumpy.jpg");
}

function setup() {
  createCanvas(img.width,img.height);
  image(img,0,0);
  //noLoop();
}

function draw() {
  copy(img,88,10,90,60,mouseX,mouseY,30,20);
  //image(img,-width/2,-height/2);
}
