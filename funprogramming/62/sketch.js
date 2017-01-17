var balls = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  fill(0,20);
  rect(0,0,width,height);
  for(var i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
  }  
}

function mousePressed(){
  balls.push(new ball(mouseX,mouseY));
}

function ball(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(random(6) - 3, random(6) -3);
  this.update = function(){
    this.pos = this.pos.add(this.vel);
    if(this.pos.x >=width||this.pos.x<=0){
      this.vel.x = - this.vel.x;
    }
    if(this.pos.y >= height||this.pos.y<=0){
      this.vel.y = - this.vel.y;
    }
  }
  this.draw = function(){
    fill(255);
    ellipse(this.pos.x,this.pos.y,10,10);
  }
}
