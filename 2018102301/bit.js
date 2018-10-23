class Bit {
  constructor(x,y,w){
    this.x = x;
    this.y = y;
    this.diameter = w;
    this.state = 0;
  }

  show(){
    stroke(0, 100,0);
    strokeWeight(3);
    fill(0, 255, 0, 40 + 255 * this.state);
    ellipse(this.x, this.y, this.diameter);
  }
  setState(bit){
    this.state = bit === "0" ? 0 : 1;
  }
  toggle(x,y){
    let d = dist(x, y, this.x, this.y);
    if (d < this.diameter/2){
      this.state = this.state === 0 ? 1 : 0;
    }
  }
}
