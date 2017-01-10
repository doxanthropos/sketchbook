var startA = 0;
function setup() {
  createCanvas(500,500);
  background(0);
  colorMode(HSB,100);
  //noLoop();
}

function draw() {
  background(0);
  var x = 50;
  var a = startA;
  while(x < width -50){
    var y = map(sin(a)*sin(a*3)*sin(a*4),-1,1,50,350);
    var co = map(y, 50, 350, 0, 100);
    var sw = map(y, 50, 350, 1, 30);
    stroke(co,100,100);
    strokeWeight(sw);
    point(x,y);
    x = x + 1;
    a = a + 0.01;
  }
  startA = startA + 0.05;
}
