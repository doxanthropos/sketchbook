var cr;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  noStroke();
  noLoop();
  cr = random(200000);
  randomSeed(cr);
}

function draw() {
  translate(width/2,height);
  rotate(PI);
  branch(0,0,0,20);
}

function branch(x,y,d,s){
  if(s<=1){
    return 0;
  } else {
    if(random(10)>9){
      ellipse(x,y,s,s);
      branch(x-d,y+2,d-1,s-2);
      branch(x+d,y+2,d+1,s-2);
    } else {
      ellipse(x+d,y,s,s);
      branch(x+d,y+2,d,s);
    }
  }
}
