var starField = [];
function setup() {
  createCanvas(300,300);
  background(0);
  stroke(255);
  strokeWeight(5);
  for(var i = 0;i<100;i++){
    starField[i] = new star();
  }
}

function draw() {
  background(0);
  for(var i = 0;i<starField.length;i++){
    starField[i].update();
    starField[i].draw();
  }
}

function star(){
  this.x = random(width);
  this.y = random(height);
  this.speed = random(5);
  this.update = function(){
    this.x = this.x - this.speed;
    if(this.x<0){
      this.x = width;
    }
  }
  this.draw = function(){
    point(this.x,this.y);
  }
}
