var mTail = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  noStroke();
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,40,40);
  for(var i = 0; i < mTail.length; i++){
    stroke(255);
    strokeWeight(40);
    if(i>0){
      line(mTail[i].x,mTail[i].y,mTail[i-1].x,mTail[i-1].y);
    }
  }
  mTail.unshift({x:mouseX , y:mouseY});
  if(mTail.length>50){
    mTail.pop();
  }
}
