var elements = [];
var num = 6;
var maxradius = 40;
var minradius = 10;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  stroke(100,100,255);
  for(var i = 0; i < num; i++){
    elements[i] = new element0(random(width),random(height),random(-5,5),random(-5,5),random(minradius,maxradius));
  }
}

function draw() {
  for(var i = 0; i < elements.length; i++){
    elements[i].update();
    /*  the inner loop implements process0
	from week03 of the Monash University course */
    for(var e = 0; e < elements.length; e++){
      if(
	dist(elements[i].x,elements[i].y,elements[e].x,elements[e].y) < elements[i].radius + elements[e].radius &&
	  e != i){
	if((i + e) % 2 == 0){
	  stroke(100,100,255);
	} else {
	  stroke(255,100,100);
	}
	line(elements[i].x,elements[i].y,elements[e].x,elements[e].y);
      }
    }
  }
}

function element0(x,y,vx,vy,r){
  /* this class implements element0
     from week03 of the Monash University Course*/
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = r;
  this.update = function(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if(this.x <= 0 || this.x >= width){
      this.vx = - this.vx;
    }
    if(this.y <= 0 || this.y >= height){
      this.vy = - this.vy;
    }
  }
}
