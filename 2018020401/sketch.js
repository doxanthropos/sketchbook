var cells = [];

function setup() {
  createCanvas(500,500);
  cells.push(new Cell(width/2,height/2,80,color(random(100,255),0,random(100,255),100)));
  fill(200);
}
function draw() {
  background(30);
  for(var i = 0;i < cells.length; i++){
    cells[i].move();
    cells[i].show();
  }
}

function Cell(x,y,r,c){
  this.pos = createVector(x,y);
  this.r = r;
  this.c = c;

  this.move = function(){
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  this.show = function(){
    noStroke();
    fill(this.c)
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
  this.clicked = function(x,y){
    var d = dist(this.pos.x, this.pos.y,x,y);
    if(d < this.r){
      return true;
    } else {
      return false;
    }
  }
  this.mitosis = function(){
    var offset = random(this.r/2);
    var cell = new Cell(this.pos.x-offset, this.pos.y, this.r * 0.8, this.c);
    this.pos.x += offset;
    return cell;
  }
}

function mousePressed(){
  for(var i = cells.length-1;i >= 0; i--){
    if(cells[i].clicked(mouseX,mouseY)){
      cells.push(cells[i].mitosis());
      cells[i].r = cells[i].r * 0.8;
    }
  }
}
