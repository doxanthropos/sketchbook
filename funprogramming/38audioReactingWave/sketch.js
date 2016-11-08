var t = 0;
var mic;
var micLevel;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200,200,255);
  var micLevel = mic.getLevel();
  console.log(micLevel);
  var x = 0;
  stroke(0,0,200);
  while(x<width){
    line(x, height/2 + noise(x/200,t)* 10000 * micLevel,x,height);
    x += 1;
    t += 0.00005;
  }
}