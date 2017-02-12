var step = 0;
function setup() {
  createCanvas(500,500);
  background(0,0,40);
  noStroke();
  fill(255,60);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  
}

function rug(rx,ry,w,h,steps) {
  if(steps==1){
    rect(rx,ry,w/3,h/3);
  } else {
    rect(rx,ry,w/3,h/3);
    rug(rx-w/3,ry-w/3,w/3,h/3,steps-1);
    rug(rx,ry-w/3,w/3,h/3,steps-1);
    rug(rx+w/3,ry-w/3,w/3,h/3,steps-1);

    rug(rx-w/3,ry,w/3,h/3,steps-1);
    rug(rx+w/3,ry,w/3,h/3,steps-1);

    rug(rx-w/3,ry+w/3,w/3,h/3,steps-1);
    rug(rx,ry+w/3,w/3,h/3,steps-1);
    rug(rx+w/3,ry+w/3,w/3,h/3,steps-1);
  }
}

function mousePressed(){
  step ++;
  rug(width/2,height/2,width,height,step);
}
