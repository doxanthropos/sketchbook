class Snake {
  constructor(){
    this.body = [];
    this.body[0] = createVector(floor(w/2),floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
  }
  update(){
    let head = this.body[this.body.length -1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  show(){
    noStroke();
    fill(200);
    for(let i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
  setDir(kc){
    if ( kc === UP_ARROW){
      this.ydir = -1;
      this.xdir = 0;
    } else if ( kc === DOWN_ARROW) {
      this.ydir = 1;
      this.xdir = 0;
    } else if ( kc === LEFT_ARROW) {
      this.ydir = 0;
      this.xdir = -1;
    } else if ( kc === RIGHT_ARROW) {
      this.ydir = 0;
      this.xdir = 1;
    } 
  }

  eat(pos){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x===pos.x && y === pos.y){
      this.grow();
      return true;
    } else {
      return false;
    }
  }
  grow(){
    let head = this.body[this.body.length -1].copy();
    this.body.push(head);
  }

  checkDeath(w,h){
    let x = this.body[this.body.length -1].x;
    let y = this.body[this.body.length -1].y;
    if (x < 0 || x > w -1 || y < 0 || y > h -1){
      return true;
    }
    for (let i = 0; i < this.body.length-1; i++){
      if (x === this.body[i].x && y === this.body[i].y){
        return true;
      } else {
        return false;
      }
    }
  }
}
