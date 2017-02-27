/*  What I would like to make here is a glitchy 404-page with a retro terminal style*   message. For now there is not so much glitch.
*   Some of the initial code is from this example: https://p5js.org/examples/interaction-tickle.html
*   the font is this one: http://asdasd.rpg.fi/~svo/glasstty/
*/
var message = "404\nPage not found";
var fontsize = 30;
var a = 0;
var x,y,font;

function preload(){
  font = loadFont('/assets/Glass_TTY_VT220.ttf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textSize(fontsize);
  textAlign(CENTER);
  textFont(font);
  fill(0,255,70);
  stroke(0,255,70,60);
  var bounds = font.textBounds(message,0,0,fontsize);
  x = width / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(0,100);
  fill(0,255,70);
  text(message,x,y);
  fill(0,255,70,50);
  text(message,x+random(-1,1),y+random(-1,1));
  background(0,random(20,100));
}

function mousePressed(){
  window.location = "/";
}
