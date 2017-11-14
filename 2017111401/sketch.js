var klines = [];
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
  noLoop();
  klines[0] = new Kl(createVector(width/4,height/2),createVector(width/2,height/4));
}
function draw() {
  for (var i = 0; i < klines.length; i++){
    klines[0].show();
  }
}
function generate() {
  var newKlines = [];
  for (var i = 0; i < klines.length; i++){
    var part1 = new Kl(klines[i].pos1);
    var part2 = new Kl(klines[i].pos1);
    var part3 = new Kl(klines[i].pos1);
    var part4 = new Kl(klines[i].pos1);
    newKlines.append();
  }
}
