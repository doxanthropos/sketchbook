function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.total = 0;
  this.tail = [];

  this.update = function(){
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
  }

  this.show = function(){
    fill(255);
    noStroke();
    rect(this.x,this.y,scl,scl);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
  }

  this.death = function(){
    for (var i = 0; i < this.tail.length; i++){
      var pos = this.tail[i];
      var d = dist(this.x,this.y,pos.x,pos.y);
      if(d < 1){
        this.total = 0;
        this.tail = [];
        playing = false;
      }
    }
    if(this.x>width-scl || this.x < 0){
      this.total = 0;
      this.tail = [];
      playing = false;
      this.xspeed = -this.xspeed;
      this.x = this.x + this.xspeed;
    }
    if(this.y>height-scl || this.y < 0){
      this.total = 0;
      this.tail = [];
      playing = false;
      this.yspeed = -this.yspeed;
      this.y = this.y + this.yspeed;
    }
  }
  this.dir = function(x,y){
    if(this.xspeed != -x){
      this.xspeed = x;
    }
    if(this.yspeed != -y){
      this.yspeed = y;
    }
  }

  this.eat = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);
    if (d < 5){
      this.total ++;
      return true;
    } else {
      return false;
    }
  }
}
