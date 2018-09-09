function setup() {
  createCanvas(500,500);
  background(0,43,54);
  stroke(101,123,131);
}
function draw() {
  let y = frameCount % height;
  background(0,43,54);
  line(0, y, width, y);
}
