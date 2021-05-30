const width  = 500;
const height = 500;
var currentX;
var colwidth;
document.addEventListener("click", function(){
  redraw();
});

/* Example values */

var x = 0.2;
var r = 2.0;
var steps = 16;

function setup() {
  createCanvas(width,height);
  background(255);
  document.getElementById("recalculate").addEventListener("click", function(){
    x = parseFloat(document.getElementById("x").value);
    r = parseFloat(document.getElementById("r").value);
    steps = parseInt(document.getElementById("steps").value);
    redraw();
  });
  noLoop();
}

function draw() {
  background(255);
  drawNumbers();
  fill(255,50,100);
  colwidth = width / (steps + 1);
  currentX = x;
  for (let step = 0; step < steps; step++){
    y = map(currentX, 0.0,1.0,height,0);
    ellipse((step +1) * colwidth, y, colwidth / 2, colwidth/ 2);
    currentX = nextX(currentX,r);
  }
}

function nextX(currentX,r){
  return r * currentX * (1.0 - currentX);
}

function drawNumbers(){
  fill(10);
  textSize(10);
  textAlign(CENTER,CENTER);
  text("0.75", width - 17, height / 4);
  rect(width -5, height / 4 - 5, 10, 10);
  text("0.5", width - 17, height / 2);
  rect(width -5, height / 2 - 5, 10, 10);
  text("0.25", width - 17, 3 * height / 4);
  rect(width -5, 3 * height / 4 - 5, 10, 10);
}
