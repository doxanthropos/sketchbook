var my_num = 10;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  smooth();
  rectMode(CENTER);
}

function draw() {
  //background(255);
  translate(width*noise(my_num + 80), height*noise(my_num + 100));
  rotate(10*noise(my_num + 40));
  rect(0,0,200*noise(30 + my_num), 200*noise(my_num));
  my_num = my_num + 0.02;
}