var tris = [];
function setup() {
  createCanvas(500,500);
  tris[0] = new Tri(50,50,450,50,250,450);
  background(20)
  noLoop();
}
function draw() {
  //background(20);
  for(var i = 0; i < tris.length; i++){
    tris[i].show();
  }
}

function Tri(x1,y1,x2,y2,x3,y3){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;
  this.c = 250;

  this.show = function(){
    noStroke();
    fill(this.c,90);
    triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
  }
}

function generate(){
  var newTris = [];
  for(var i = 0; i < tris.length; i++){
    var x4 = (tris[i].x2 - tris[i].x1)/2 + tris[i].x1;
    var y4 = (tris[i].y2 -tris[i].y1)/2 + tris[i].y1;
    point(x4,y4);
    var x5 = (tris[i].x3 - tris[i].x2)/2 + tris[i].x2;
    var y5 = (tris[i].y3 -tris[i].y2)/2 + tris[i].y2;
    point(x5,y5);
    var x6 = (tris[i].x1 - tris[i].x3)/2 + tris[i].x3;
    var y6 = (tris[i].y3 - tris[i].y1)/2 + tris[i].y1;
    point(x6,y6);
    var triA = new Tri(tris[i].x1,tris[i].y1, x4, y4, x6, y6);
    var triB = new Tri(x4,y4,tris[i].x2,tris[i].y2,x5,y5);
    var triC = new Tri(x5,y5,tris[i].x3,tris[i].y3,x6,y6);
    newTris.push(triA);
    newTris.push(triB);
    newTris.push(triC);
  }
  tris = newTris;
}

function mousePressed(){
  generate();
  for(var i = 0; i < tris.length; i++){
    tris[i].show();
  }
}
