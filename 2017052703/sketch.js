var maxSpeed = 5;
var diameter = 60;
var num = 10;
var elements = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  colorMode(HSB,100);
  for( var i = 0; i < num; i++){
    elements[i] = new element0();
  }
}

function draw() {
  background(0);
  for( var i = 0; i < num; i++){
    elements[i].update();
    for( var e = 0; e < num; e++){
      if( dist(elements[i].x,elements[i].y,elements[e].x,elements[e].y) < diameter / 2 && i != e){
        if(i % 2 == 0){ stroke(100,100,100)} else {
          stroke(50,100,100)
        }
        line(elements[i].x,elements[i].y,elements[e].x,elements[e].y);
      }
    }
  }
}

function element0(){
  this.x = random(width);
  this.y = random(height);
  this.vx = random(- maxSpeed, maxSpeed);
  this.vy = random(- maxSpeed, maxSpeed);
  this.color = random(100);
  this.update = function(){
    strokeWeight(3);
    stroke(this.color,100,100);
    noFill();
    ellipse(this.x,this.y,diameter,diameter);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if( this.x >= width - diameter/2 || this.x <= 0 + diameter/2){
      this.vx = -this.vx;
    }
    if( this.y >= height - diameter/2 || this.y <= 0 + diameter/2){
      this.vy = -this.vy;
    }
  }
}
