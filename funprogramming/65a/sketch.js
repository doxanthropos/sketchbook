var draggerx = 50;
var draggery = 50;
var draggedx = 50;
var draggedy = 100;
var dragged2x = 50;
var dragged2y = 150;
function setup() {
  createCanvas(windowWidth,windowHeight);
  //colorMode(HSB);
}

function draw() {
  background(0);
  draggedx = lerp(draggedx,draggerx,0.1);
  draggedy = lerp(draggedy,draggery + 50,0.1);
  dragged2x = lerp(dragged2x,draggedx,0.1);
  dragged2y = lerp(dragged2y,draggedy + 50,0.1);
  stroke(100,100,255);
  line(draggerx,draggery,draggedx,draggedy);
  line(draggedx,draggedy,dragged2x,dragged2y);
  noStroke();
  fill(255,0,255);
  ellipse(draggerx,draggery,20,20);
  ellipse(draggedx,draggedy,20,20);
  ellipse(dragged2x,dragged2y,20,20);
}

function mouseDragged(){
  draggerx = mouseX;
  draggery = mouseY;
}
