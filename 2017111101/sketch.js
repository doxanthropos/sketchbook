/*
Looking into the functions of p5.play
http://p5play.molleindustria.org
using the Fantasy Heroes: Vikings Sprite Sheet
from Ragewortt
https://opengameart.org/content/fantasy-heroes-vikings-sprite-sheet
*/
var viking;

function preload(){
  viking = loadAnimation("assets/Walk/0.png","assets/Walk/9.png");
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);
  animation(viking,400,200);
}
