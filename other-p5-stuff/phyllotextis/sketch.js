var myText = "Hello World!";
var c = 9;
function setup() {
  createCanvas(500,500);
  background(255);
  angleMode(DEGREES);
  colorMode(HSB);
  noStroke();
  noLoop();
}

function draw() {
  //background(0);
  for(n = 0;n <= 620;n++){
    var a = n * 137.5;
    var r = c * sqrt(n);
    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;
    fill(0);
    var currentLetter = myText[(n) % myText.length];
    push();
    translate(x,y);
    rotate(a+90);
    text(currentLetter,0,0);
    pop();
  }
}
