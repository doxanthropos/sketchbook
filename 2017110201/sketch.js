var myStar = [];
var number = 500;
function setup() {
  createCanvas(600,600);
  background(0);
  noStroke();
  fill(200);
  for(var i = 0;i<number;i++){
  myStar[i] = new Star(i*0.5 + random(-20,20),map(i,0,number,0,PI*4));
  }
}
function draw() {
  background(0);
  translate(width/2,height/2);
  for(var i = 0;i<myStar.length;i++){
    myStar[i].update(i);
    myStar[i].draw();
  }
}

function Star(radius,start){
  this.radius = radius;
  this.step = start;
  this.size = random(1,15);
  this.x = sin(this.step) * this.radius;
  this.y = cos(this.step) * this.radius;
  this.update = function(i){
    this.step -= 0.01;
    this.x = sin(this.step) * this.radius;
    this.y = cos(this.step) * this.radius;
    this.size -= 0.1;
    if(this.size<=0){
      this.size = random(1,15);
      this.radius = i*0.5 + random(-20,20);
    }
  }
  this.draw = function(){
    ellipse(this.x,this.y,this.size,this.size);
  }
}
