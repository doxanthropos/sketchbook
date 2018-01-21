var phase = 0, speed = 0.03;
var maxCircleSize = 20;
var numRows = 10;
var numColumns = 10;
var numStrands = 2;
var colorA, colorB;
function setup() {
  createCanvas(500,500);
  noStroke();
  colorA = color(253,174,120);
  colorB = color(226, 129, 161);
}
function draw() {
  background(127);
  phase = frameCount * speed;
  for(var strand = 0; strand < numStrands; strand++){
    for(var col = 0; col < numColumns; col++){
      var x = map(col, 0, numColumns, 50, width - 50);
      var colOffset = map(col, 0, numColumns, 0, TWO_PI);
      for(var row = 0; row < numRows; row++){
        var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
        fill(lerpColor(colorA,colorB, row / numRows));
        var y = height/2 + row * 10 + sin(strandPhase + colOffset) * 100 - numRows * 5;
        var sizeOffset = (cos(strandPhase - (row/numRows) + colOffset) +1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        ellipse(x,y,circleSize,circleSize);
      }
    }
  }
}
