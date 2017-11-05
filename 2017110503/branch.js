function Branch(begin,end){
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.show = function(){
    stroke(255);
    line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }
  this.branchA = function(){
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(random(PI/7,PI/3));
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var right = new Branch(this.end,newEnd);
    return right;
  }
  this.branchB = function(){
    this.finished = true;
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(random(-PI/7,-PI/3));
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);

    var right = new Branch(this.end,newEnd);
    return right;
  }

  this.jitter = function(){
    this.end.x += random(-1,1);
    this.end.y += random(-1,1);
  }
}

function Leave(position){
  this.position = position;
  this.velocity = createVector(0,0);
  this.show = function(){
    if(this.velocity.y!=0){
      this.position = p5.Vector.add(this.position,this.velocity);
      if(this.position.y>=height-5){
        this.velocity.y = 0;
      }
    }
    noStroke();
    fill(255,0,255,100);
    ellipse(this.position.x,this.position.y,10,10);
  }
}
