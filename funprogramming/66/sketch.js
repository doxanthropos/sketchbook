var seed;
function setup() {
  createCanvas(windowWidth,windowHeight);
  noLoop();
  seed = random(10000);
  randomSeed(seed);
  colorMode(HSB,100);
  noStroke();
}

function draw() {
  var x = 0;
  while(x<width){
    var wi = random(100);
    fill(random(100),80,80);
    rect(x,0,wi,height);
    x = x + wi;
  }
  console.log(seed);
}
