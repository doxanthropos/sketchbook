let snake;
let rez = 20;
let food;
let w;
let h;
let gameState = "START";
let score = 0;
let highScore = 0;
function setup() {
  createCanvas(500,500);
  w = floor(width/rez);
  h = floor(height/rez);
  background(30);
  frameRate(5)
  snake = new Snake(w,h);
  foodLocation();
}
function draw() {
  if(gameState === "START"){
    drawStart();
  } else if(gameState === "PLAY"){
    drawPlay();
  } else if(gameState === "GAME OVER"){
    drawGameOver();
  }
}

function drawPlay(){
  scale(rez);
  background(30);
  snake.update();
  snake.show();
  if(snake.checkDeath(w,h)){
    gameState = "GAME OVER";
    score = snake.body.length -1;
    highScore = max(score, highScore);
  };
  if (snake.eat(food)){
    foodLocation();
  }
  fill(200,0,0);
  rect(food.x, food.y, 1, 1);
}

function drawStart(){
  fill(200);
  noStroke();
  textSize(width/20);
  textAlign(CENTER, CENTER)
  text("Welcome to Snake!", width/2, height/2);
  text("Click here to play", width/2, height/2 + width/20);
}

function drawGameOver(){
  snake = new Snake(w,h);
  foodLocation();
  background(30);
  fill(200);
  noStroke();
  textSize(width/20);
  textAlign(LEFT,TOP);
  text("Score: " + score, 20, 20);
  textAlign(RIGHT,TOP);
  text("Highscore: " + highScore, width-20, 20);
  textAlign(CENTER, CENTER)
  text("Game Over", width/2, height/2);
  text("Click here to play again", width/2, height/2 + width/20);
}

function keyPressed(){
  snake.setDir(keyCode);
}

function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));

  food = createVector(x, x);
}

function mousePressed(){
  gameState = "PLAY";
}
