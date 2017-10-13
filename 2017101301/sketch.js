/*
http://freemusicarchive.org/music/The_Freeharmonic_Orchestra/Space_Robots_the_Future/14_-_Skeptics
*/
function preload() {
  song = loadSound('Skeptics.mp3');
  amp = new p5.Amplitude();
}
var space;
var x;
var y;
var numberOfSpaces = 20;
var count = 0;
var thresholdSine = 0.2;
var thresholdCircle = 0.5;
function setup() {
  song.play();
  createCanvas(windowWidth,windowHeight);
  background(0);
  space = width / numberOfSpaces;
  x = space;
  y = space;
}

function draw() {
  noStroke();
  fill(0,20);
  rect(0,0,width,height);
  var level = amp.getLevel() * 3;
  for(var x = space; x <= width-space; x += space){
    for(var y = space; y <= height-space; y += space){
      fill(200);
      ellipse(x, y,space/3*level,space/3*level);
    }
  }
  if(level>thresholdCircle){
    noStroke();
    fill(255,30);
    ellipse(width/2,height/2,width*level, height*level);
  }
  if(level>thresholdSine){
    count++;
  }
  translate(width/2,height/2);
  stroke(255);
  line(0 + sin(count/100)* width/2,0 + cos(count/100)* height/2,0 + cos(count/100)* height/2,0 + sin(count/100)* width/2,0);
}
