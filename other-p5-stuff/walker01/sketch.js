var walkers = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  walkers.push(new Walker(width/2,height/2,1,0,20));
  stroke(255);
}

function draw() {
  for(var i = 0; i < walkers.length;i++){
    walkers[i].update();
    walkers[i].show();
  }
}

function Walker(x,y,vx,vy,sidelength){
  this.pos = createVector(x,y);
  this.vel = createVector(vx,vy);
  this.sideLength = sidelength;
  this.currentLength = 0;
  this.update = function(){
    this.pos = this.pos.add(this.vel);
    this.currentLength ++;
    if(this.currentLength>=this.sideLength){
      this.vel.x = round(random(-1,1));
      this.vel.y = round(random(-1,1));
      this.currentLength = 0;
    }
  }
  this.show = function(){
    point(this.pos.x,this.pos.y);
  }
}

function mousePressed(){
  walkers.push(new Walker(mouseX,mouseY,round(random(-1,1)),round(random(-1,1)),20));
}
