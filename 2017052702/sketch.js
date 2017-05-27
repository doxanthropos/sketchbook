var seeder;
/* The seeder variable allows you to recreate the random numbers if you want to */
var myLiners = [];
var num = 5;
var maxSpeed = 2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB,100);
  seeder = random(100000);
  randomSeed(seeder);
  console.log(seeder);
  for( var i = 0; i < num; i ++){
    myLiners[i] = new liner();
  }
}

function draw() {
  noStroke();
  fill(0,0,0,1);
  //rect(0,0,width,height);
  rect
  for( var i = 0; i < num; i ++){
    myLiners[i].update();
  }
}

function liner(){
  this.x = random(50,width - 50);
  this.y = random(50,height - 50);
  this.vx = random(-maxSpeed, maxSpeed);
  this.vy = random(-maxSpeed, maxSpeed);
  this.color = random(100);
  /* the starting point variable changes the point in th ecircle where the different lines begin, because without it, it looked too synchronous */
  this.startingPoint = random(6)
  this.update = function(){
  //background(0);
  //ellipse(x,y,20,20);
  
  var dx = this.x + sin((frameCount + this.startingPoint)/30)* 50;
  var dy = this.y + cos((frameCount + this.startingPoint)/30)* 50;
  //ellipse(dx,dy, 10,10);
  var ex = dx + sin((frameCount + this.startingPoint)/50)* 20;  
  var ey = dy + cos((frameCount + this.startingPoint)/50)* 20;
  var fx = dx + sin((frameCount + this.startingPoint)/30)* 20;
  var fy = dy + cos((frameCount + this.startingPoint)/30)* 20;
  //ellipse(ex,ey, 10,10);
  stroke(this.color,100,100,50);
  line(ex,ey,fx,fy);
  this.x += this.vx;
  this.y += this.vy;
  if( this.x >= width - 50 || this.x <= 50){ this.vx = - this.vx }
  if( this.y >= height -50 || this.y <= 50){ this.vy = -this.vy }    
  }
}
