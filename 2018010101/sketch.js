var fireworks = [];
var gravity;

function Particle(x,y, firework){
  this.pos = createVector(x,y);
  this.firework = firework;
  if(this.firework){
    this.vel = createVector(0,random(-12,-5));
  } else {
    this.vel = p5.Vector.random2D();
  }
  this.acc = createVector(0,0);
  this.exploded = false;
  
  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function(){
    point(this.pos.x,this.pos.y);
  }
}

function Firework(){
  this.firework = new Particle(random(width), height, true);
  this.particles = [];

  this.update = function(){
    if(!this.exploded){
    this.firework.applyForce(gravity);
    this.firework.update();

    if(this.firework.vel.y >= 0){
      this.exploded = true;
      this.explode();
    }
    } else {
      for(var i = 0; i < this.particles.length;i++){
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
      }
    }
  };
  
  this.show = function(){
    if(!this.exploded){
    this.firework.show();
    } else {
      for(var i = 0; i < this.particles.length;i++){
        this.particles[i].show();
      }
    }
  }
  this.explode = function(){
    for(var i = 0; i < 100; i++){
      var p = new Particle(this.firework.pos.x,this.firework.pos.y, false);
      this.particles.push(p);
    }
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  gravity = createVector(0,0.2);
  background(51);
  stroke(255);
  strokeWeight(4);
  }
function draw() {
  if(random(1) < 0.1){
    fireworks.push( new Firework());
  }
  background(51);
  for (var i = 0; i < fireworks.length; i++){
    fireworks[i].update();
    fireworks[i].show();
  }
}
