var x;
var y;
var vx;
var vy;
var seeder;
/* The seeder variable allows you to recreate the random numbers if you want to */

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = width / 2;
  y = height / 2;
  vx = random(-5, 5);
  vy = random(-5, 5);
  seeder = random(100000);
  randomSeed(seeder);
  console.log(seeder);
  
}

function draw() {
  //background(0);
  //ellipse(x,y,20,20);
  
  var dx = x + sin(frameCount/30)* 50;
  var dy = y + cos(frameCount/30)* 50;
  //ellipse(dx,dy, 10,10);
  var ex = dx + sin(frameCount/50)* 20;
  var ey = dy + cos(frameCount/50)* 20;
  //ellipse(ex,ey, 10,10);
  stroke(255);
  line(ex,ey,x,y);
  x += vx;
  y += vy;
  if( x >= width - 50 || x <= 50){ vx = - vx }
  if( y >= height -50 || y <= 50){ vy = -vy }
}
