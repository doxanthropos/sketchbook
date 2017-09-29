var mySeed;
var spacing = 20;
var thickness = 0;
var growing = 1;
var color1 = {
  r: 255,
  g: 200,
  b: 200
}
var color2 = {
  r: 50,
  g: 0,
  b: 0
}
function setup() {
  createCanvas(500,500);
  background(color2.r,color2.g,color2.b);
  stroke(color1.r,color1.g,color1.b);
  mySeed = random(100000);
  randomSeed(mySeed);
  strokeWeight(thickness);
}

function draw() {
  randomSeed(mySeed);
  background(color2.r,color2.g,color2.b);
  stroke(color1.r,color1.g,color1.b);
  strokeWeight(thickness);
  for(var e = 0; e <= height/spacing; e++){
    for(var i = 0; i <= width/spacing;i++){
    if(random(1)>0.5){
      line(i*spacing+0,e*spacing+0,i*spacing+spacing,e*spacing+spacing);
    } else {
        line(i*spacing+0,e*spacing+spacing,i*spacing+spacing,e*spacing+0);
    }
    }
  }
  if(thickness>spacing/2){
    thickness = 0;
    mySeed = random(1000);
    color2.r = color1.r;
    color2.g = color1.g;
    color2.b = color1.b;
    color1.r = random(255);
    color1.g = random(255);
    color1.b = random(255);
    }
  thickness = thickness + growing;
}


