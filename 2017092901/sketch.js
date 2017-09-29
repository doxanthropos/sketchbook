function setup() {
  createCanvas(500,500);
  background(0,0,50);
  stroke(200,200,255);
  noLoop();
}

function draw() {
  for(var e = 0; e <= height/10; e++){
    for(var i = 0; i <= width/10;i++){
    if(random(1)>0.5){
      line(i*10+0,e*10+0,i*10+10,e*10+10);
    } else {
        line(i*10+0,e*10+10,i*10+10,e*10+0);
    }
    }
  }
}
