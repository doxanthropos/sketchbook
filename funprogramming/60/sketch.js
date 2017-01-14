var starField = [];
var ship;
function setup() {
  createCanvas(600,600);
  background(0);
  stroke(255);
  strokeWeight(5);
  for(var i = 0;i<100;i++){
    starField[i] = new star();
  }
  ship = new spaceship();
}

function draw() {
  background(0);
  for(var i = 0;i<starField.length;i++){
    starField[i].update();
    starField[i].draw();
  }
  ship.update();
  ship.draw();
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
    stroke(map(this.speed,0,5,200,255));
    strokeWeight(this.speed);
    point(this.x,this.y);
  }
}

function spaceship(){
  this.x = 50;
  this.y = 300;
  this.update = function(){
    if(keyIsDown(UP_ARROW)&&this.y>6){
      this.y -= 5;
    }
    if(keyIsDown(DOWN_ARROW)&&this.y<height-6){
      this.y += 5;
    }
  };
  this.draw = function(){
    triangle(this.x, this.y-6,this.x+20,this.y,this.x,this.y+6);
  };
}
