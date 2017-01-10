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
  var co = map(sin(a*0.03),-1,1,0,100);
  var sz = map(sin(a*1.7)*sin(a*2.3),-1,1,5,30);
  noStroke();
  fill(co,100,co);
  ellipse(x,y,sz,sz);
  a = a + 0.05;
  if(frameCount == 3600){
    saveCanvas("dot1","png");
  }
  if(frameCount == 5174){
    saveCanvas("dot2","png");
  }
}
