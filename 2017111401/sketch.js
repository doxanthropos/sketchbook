var klines = [];
var edges = 3;
function Kl(pos1,pos2){
  this.pos1 = pos1;
  this.pos2 = pos2;
  this.show = function(){
    stroke(255);
    line(this.pos1.x,this.pos1.y,this.pos2.x,this.pos2.y);
  }
}
function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent("canvas");
  background(0);
  fill(255,0,9);
  for (var i = 0; i < edges; i++){
    var x1 = sin(TWO_PI/edges*i) * 150 + width/2;
    var x2 = sin(TWO_PI/edges*(i+1)) * 150 + width/2;
    var y1 = cos(TWO_PI/edges*i) * 150 + height/2;
    var y2 = cos(TWO_PI/edges*(i+1)) * 150 + height/2;
    klines[i] = new Kl(createVector(x2,y2),createVector(x1,y1));
  }
}
function draw(){
  background(0);
  for (var i = 0; i < klines.length; i++){
    klines[i].show();
  }
}
function generate() {
  var newKlines = [];
  for (var i = 0; i < klines.length; i++){
    var a = klines[i].pos1;
    var b = klines[i].pos2.copy().sub(klines[i].pos1).div(3).add(klines[i].pos1);
    var c = klines[i].pos2.copy().sub(klines[i].pos1).div(3).rotate(radians(-60)).add(b);
    var d = klines[i].pos2.copy().sub(klines[i].pos1).div(3).mult(2).add(klines[i].pos1);
    var e = klines[i].pos2;
    newKlines.push( new Kl(a,b));
    newKlines.push( new Kl(b,c));
    newKlines.push( new Kl(c,d));
    newKlines.push( new Kl(d,e));
  }
  klines = newKlines;
}

function mousePressed(){
  generate();
}
