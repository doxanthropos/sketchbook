/*
drawing sketch based on the loop example from Lauren McCarthy at the end of session 2 of this course:
https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js-vi
 */
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  for(var x = 50; x <= width-50; x += 50){
    for(var y = 50; y <= height-50; y+=50){
      line(x,y,mouseX,mouseY);
    }
  }
}

function mousePressed(){
  stroke(200,3);
}

function mouseReleased(){
  noStroke();
}
