var sap = [];
function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent("canvas");
  background(0);
  sap[0] = new Sapphire(width/2,height/2,200);
  sap[1] = new Sapphire(50,50,20);
}
function draw() {
  //background(0);
  noStroke();
  fill(0,5);
  rect(0,0,width,height);
  sap[0].update();
  noStroke();
  fill(0,0,255,10);
  sap[0].show();
  stroke(255);
  noFill();
  sap[1].show();
}

function Sapphire(x,y,radius){
  this.position = createVector(x,y);
  this.startradius = radius;
  this.radius = this.startradius;
  this.angle = PI;

  this.show = function(){
    triangle(this.position.x,this.position.y,
      sin(0)*this.radius + this.position.x,cos(0)*this.radius + this.position.y,
      sin(this.angle/3)*this.radius + this.position.y,cos(this.angle/3)*this.radius + this.position.y);
    triangle(this.position.x,this.position.y,
      sin(this.angle/3)*this.radius + this.position.x,cos(this.angle/3)*this.radius + this.position.y,
      sin(this.angle*2/3)*this.radius + this.position.y,cos(this.angle*2/3)*this.radius + this.position.y);
    triangle(this.position.x,this.position.y,
      sin(this.angle*2/3)*this.radius + this.position.x,cos(this.angle*2/3)*this.radius + this.position.y,
      sin(this.angle)*this.radius + this.position.y,cos(this.angle)*this.radius + this.position.y);
    triangle(this.position.x,this.position.y,
      sin(this.angle)*this.radius + this.position.x,cos(this.angle)*this.radius + this.position.y,
      sin(this.angle+this.angle/3)*this.radius + this.position.y,cos(this.angle+this.angle/3)*this.radius + this.position.y);
    triangle(this.position.x,this.position.y,
      sin(this.angle+this.angle/3)*this.radius + this.position.x,cos(this.angle+this.angle/3)*this.radius + this.position.y,
      sin(this.angle+this.angle*2/3)*this.radius + this.position.y,cos(this.angle+this.angle*2/3)*this.radius + this.position.y);
    triangle(this.position.x,this.position.y,
      sin(this.angle+this.angle*2/3)*this.radius + this.position.x,cos(this.angle+this.angle*2/3)*this.radius + this.position.y,
    sin(this.angle*2)*this.radius + this.position.y,cos(this.angle*2)*this.radius + this.position.y);
  }
  this.update = function(){
    this.radius = sin(frameCount/100)*this.startradius;
    this.angle+=0.1;
  }
}
