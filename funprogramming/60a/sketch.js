var diam = 100;
var a = 0;
var playing = false;
function setup() {
  createCanvas(500,400);
  background(0);
  noFill();
}

function draw() {
  if(playing){
  background(0);
  var x = noise(a, 10)*width;
  var y = noise(a, 20)*height;
  stroke(255,255,0);
  ellipse(x,y,diam,diam);
  stroke(0,255,0);
  ellipse(mouseX,mouseY,diam,diam);
  if(dist(mouseX,mouseY,x,y)<diam){
    playing = false;
  }
  a = a + 0.01;
  } else {
    background(0);
    stroke(255);
    textAlign(CENTER);
    text("Click to play",width/2,height/2);
    text("Avoid the yellow circle!",width/2,height -30);
  }
}

function mousePressed(){
  playing = true;
}

