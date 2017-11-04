/*
This sketch is is just the result of following Dan Shiffman on his video:
https://www.youtube.com/watch?v=0jjeOYMjmDU&t=15s
Coding Challenge #14: Fractal Trees - Recursive
*/
var angle,ratio,slider1,slider2;
function setup() {
  createCanvas(600,600);
  background(0);
  stroke(200);
  angle = PI/4;
  slider1 = createSlider(0,2*PI,PI/4,0.01);
  slider2 = createSlider(0,1,0.75,0.01);
}
function draw() {
  background(0);
  angle = slider1.value();
  ratio = slider2.value();
  translate(width/2,height);
  branch(100);
}

function branch(len){
  strokeWeight(len/10);
  line(0,0,0,-len);
  translate(0,-len);
  if(len>5){
    push();
    rotate(angle);
    branch(len*ratio);
    pop();
    push();
    rotate(-angle);
    branch(len*ratio);
    pop();
  }
}
