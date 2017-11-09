function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent("canvas");
  background(0);
  fill(255,0,9);
  noLoop();
}
function draw() {
  generate(width/2,height/2,random(6),width);
}
function generate(cx,cy,d,w) {
  if(d<=1){
    quad(cx,cy-w/2,cx+w/2,cy,cx,cy+w/2,cx-w/2,cy);
  } else {
    quad(cx,cy-w/2,cx+w/2,cy,cx,cy+w/2,cx-w/2,cy);
    fill(0,10);
    noStroke();
    rect(0,0,width,height);
    fill(255,0,0);
    generate(cx - w/4,cy+w/4,d-1,w/2);
    generate(cx - w/4,cy-w/4,d-1,w/2);
    generate(cx + w/4,cy+w/4,d-1,w/2);
    generate(cx + w/4,cy-w/4, d-1,w/2);
  }
}
