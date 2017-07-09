var diameter;
var squareHeight;
var currentH = 100;
var currentS = 100;
var currentB = 100;
var circleCenterX;
var circleCenterY;
var points = [];

function setup() {
  createCanvas(min(windowWidth,windowHeight),min(windowWidth,windowHeight));
  background(100);
  diameter = width * 0.8;
  squareHeight = width * 0.18;
  circleCenterX = width/2;
  circleCenterY = height/2 - height*0.1;
  colorMode(HSB);
}

function draw() {
  noStroke();
  fill((currentH + 180) % 360,currentS,currentB);
  ellipse(circleCenterX,circleCenterY,diameter,diameter);
  fill(currentH,currentS,currentB);
  rect(width/2-squareHeight,height-squareHeight,squareHeight,squareHeight);
  fill((currentH + 180) % 360,currentS,currentB);
  rect(width/2,height-squareHeight,squareHeight,squareHeight);
  for(var i = 0; i < points.length; i ++){
    strokeWeight(10);
    stroke(points[i].h,points[i].s,points[i].b);
    point(points[i].x,points[i].y);
  }
}

function mousePressed(){
  currentS = map(dist(mouseX,mouseY,circleCenterX,circleCenterY),0,diameter/2,0,100);
  currentH = 180 + degrees(atan2(mouseY - circleCenterY, mouseX - circleCenterX));
  console.log("This is the current hue: " + currentH);
  points.push({x: mouseX, y: mouseY, h: currentH, s: currentS, b: currentB});
}
