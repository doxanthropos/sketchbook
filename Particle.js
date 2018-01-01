function Particle(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(0,-4);
  console.log(this.vel);
  console.log(this.pos);
  //this.acc = createVector(0,0);
  
  this.applyForce = function(force){
    acc.add(force);
  }

  this.update = function(){
    //this.vel.add(this.acc);
    this.pos.add(this.vel);
    //this.acc.mult(0);
  }

  this.show = function(){
    point(this.pos.x,this.pos.y);
  }
}
