var tris = [];
function setup() {
  createCanvas(500,500);
  tris[0] = new Tri(50,50,450,50,250,450);
}
function draw() {
  background(20);
  for(var i = 0; i < tris.length; i++){
    tris[i].show();
  }
}

function Tri(x1,y1,x2,y2,x3,y3){
  this.a = createVector(x1,y1);
  this.b = createVector(x2,y2);
  this.c = createVector(x3,y3);
  this.hue = random(50,250);

  this.show = function(){
    noStroke();
    fill(this.hue,90);
    triangle(this.a.x,this.a.y,this.b.x,this.b.y,this.c.x,this.c.y);
    stroke(255);
    strokeWeight(5);
    //point(this.a.sub(this.b));
  }
}

function generate(){
  var newTris = [];
  for(var i = 0; i < tris.length; i++){
    var triA = new Tri();
    var triB = new Tri();
    newTris.push(triA);
    newTris.push(triB);
  }
}
