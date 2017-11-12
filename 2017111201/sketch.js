/*
Looking into the functions of p5.play
http://p5play.molleindustria.org
using the Fantasy Heroes: Vikings Sprite Sheet
from Ragewortt
https://opengameart.org/content/fantasy-heroes-vikings-sprite-sheet
*/
var ship;
var starField = [];
var stars = 100;

function preload(){
  ship = loadAnimation("assets/ship/smallfighter0001.png","assets/ship/smallfighter0011.png");
}
function setup() {
  createCanvas(800,600);
  background(0);
  for(var i = 0;i<stars;i++){
    starField[i] = new Star();
  }
}

function draw() {
  background(0);
  for(var i = 0; i < starField.length; i++){
    starField[i].update();
    starField[i].draw();
  }
  animation(ship,400,200);
}

function Star(){
  this.x = random(width);
  this.y = random(height);
  this.speed = random(5);
  this.update = function(){
    this.y = this.y + this.speed;
    if(this.y>height){
      this.y = 0;
    }
  }
  this.draw = function(){
    stroke(map(this.speed,0,5,200,255));
    strokeWeight(this.speed);
    point(this.x,this.y);
  }
}
