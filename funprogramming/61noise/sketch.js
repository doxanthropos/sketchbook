var a = 0;
var dots = [];
function setup() {
  createCanvas(500,400);
  background(0);
  noStroke();
}

function draw() {
  fill(0,20);
  rect(0,0,width,height);
  fill(255);
  for(var i = 0;i< dots.length;i ++){
    var x = dots[i].x + (noise(a,10)*50 - 25);
    var y = dots[i].y + (noise(a,20)*50 - 25);
    ellipse(x,y,20,20);

    a = a + 0.01;
  }  
}

function mousePressed(){
  dots.push(createVector(mouseX,mouseY));
}
