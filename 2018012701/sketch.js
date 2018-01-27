var s;
var scl = 20;
var food;
var playing = false;

function setup() {
  createCanvas(600,600);
  s = new Snake();
  foodPosition();
  frameRate(10);
  noStroke();
}
function draw() {
      background(20,20,20);
  if(playing){
    s.death();
    s.update();
    s.show();
    if (s.eat(food)){
      foodPosition();
      console.log("Eating!");
    };
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
  } else {
    welcomeScreen();
  }
}

function foodPosition(){
  food = createVector(floor(random(width/scl))*scl,floor(random(height/scl))*scl);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW){
    s.dir(0,1);
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1,0);
  } else if( keyCode === RIGHT_ARROW){
    s.dir(1,0);
  } else if ( keyCode === 32){
    if(!playing){
      playing = true;
    }
  }
}

function welcomeScreen(){
  fill(255,0,100);
  ellipse(width/2,height/2,200,200);
  fill(20);
  textAlign(CENTER);
  text('PRESS SPACE TO PLAY', width/2,height/2);
}
