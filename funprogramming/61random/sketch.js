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
    var x = dots[i].x + random(4) - 2; 
    var y = dots[i].y + random(4) -2;
    ellipse(x,y,20,20);
  }  
}

function mousePressed(){
  dots.push(createVector(mouseX,mouseY));
}
