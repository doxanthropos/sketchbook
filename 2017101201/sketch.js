var e = 0;
var i = 0;
function setup() {
  createCanvas(500,500);
  background(0,0,50);
  stroke(200,200,255);
}

function draw() {
    noStroke();
    fill(0,0,50);
    rect(i*10+1,e*10+1,10,10);
    stroke(200,200,255);
    if(random(1)>0.5){
      line(i*10+1,e*10+1,i*10+11,e*10+11);
    } else {
        line(i*10+1,e*10+11,i*10+11,e*10+1);
    }
    i++;
    if(i>=width/10){
      i = 0;
      e ++;
    }
    if(e>=height/10){
      e = 0;
    }
}
