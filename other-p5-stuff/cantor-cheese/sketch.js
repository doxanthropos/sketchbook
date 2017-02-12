function setup() {
  createCanvas(500,500);
  background(0,0,40);
  noStroke();
  fill(255,20);
  noLoop();
}

function draw() {
  cantorCircle(width/2,height/2,5,width);
}

function cantorCircle(cx,cy,d,w) {
  if(d<=1){
    ellipse(cx,cy,w)
  } else {
    ellipse(cx,cy,w);
    cantorCircle(cx - w/4,cy,d-1,w/2);
    cantorCircle(cx + w/4,cy,d-1,w/2);
  }
}
