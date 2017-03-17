var apoints = [];
var bpoints = [];
var lines = 40;
var c = 0;
function setup() {
  createCanvas(400,400);
  background(255);
  stroke(0);
  for(var i = 0; i < lines; i++){
    apoints[i] = createVector(0,height*i/lines);
    bpoints[i] = createVector(width*i/lines,height);
  }
  //noLoop();
  frameRate(1);
}

function draw() {
  rect(0,0,width-1,height-1);
  stroke(random(255));
  for(var i = 0; i < lines; i++){
    line(apoints[i].x,apoints[i].y,bpoints[i].x,bpoints[i].y);
  }
  var x = apoints[c].x;
  var y = apoints[x].y;
  apoints[c].x = y;
  apoints[c].y = x;
  x = bpoints[c].x;
  y = bpoints[c].y;
  bpoints[c].x = y;
  bpoints[c].y = x;
  if(c==lines-1){
    c = 0;
  } else {
    c ++;
  }
}
