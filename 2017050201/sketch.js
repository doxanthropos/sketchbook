var modifier = 0;
var direction = -1;
function setup() {
  createCanvas(501,501);
  background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  for(var e = 0; e<5; e++){
    ellipse(0, e* 100 + 100,50+modifier,50+modifier);
    for(var i = 0; i<5; i++){
      stroke(255,100,100);
      ellipse(i*100 + 50,e*100 + 50,100+modifier,100+modifier);
      stroke(255);
      rect(i*100 + 50,e * 100 + 50,100+modifier,100+modifier);
      ellipse(i*100 + 100, e* 100 + 100,50+modifier,50+modifier);
    }
  }
  if(modifier>300||modifier<=0){ direction = -direction};
  modifier = modifier + direction;
}
