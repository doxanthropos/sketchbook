var img;
var r = 1;
function preload() {
  img = loadImage("./grumpy.jpg");
}

function setup() {
  createCanvas(img.width,img.height);
  //noLoop();
}

function draw() {
  translate(width/2,height/2);
  rotate(r);
  image(img,-width/2,-height/2);
  r = r + map(abs(width/2-mouseX),0,width/2,0.5,0);
}
