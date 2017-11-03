var waiting = false;
var thickness = 0;
var step = 0;
function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent("canvas");
  background(0);
  noStroke();
}
function draw() {
  background(0);
  translate(width/2,height/2);
  if(thickness<50){
    thickness += 0.5;
  }
  for(var i=0;i<thickness;i++){
    fill(200);
    ellipse(0,150-i,400,100);
  }
  for(var i=0;i<thickness;i++){
    fill(240);
    ellipse(0,100-i,400,100);
}
for(var i=0;i<thickness;i++){
  fill(200);
  ellipse(0,50-i,400,100);
}
fill(255);
ellipse(0,0,400,100);
if(thickness>=50){
  drawCandle(sin(step)* 170,cos(step)* 30);
  drawCandle(sin(step+PI)* 170,cos(step+PI)* 30);
  drawCandle(sin(step+PI*3/2)* 170,cos(step+PI*3/2)* 30);
  drawCandle(sin(step+PI/2)* 170,cos(step+PI/2)* 30);
  if(!waiting){ step += 0.01; }
}

}

function mousePressed(){
  waiting = !waiting;
}

function drawCandle(x,y){
  fill(150);
  rect(x-10,y,20,-60);
  ellipse(x,y,20,5);
  ellipse(x,y-60,20,5);
  fill(255);
  ellipse(x,y-70,5,20);
}
