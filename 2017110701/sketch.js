var swords = [];
function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent("canvas");
  background(0);
  swords[0] = new Sword(width/2,height/3,200);
}
function draw() {
  background(0);
  for(var i=0;i<swords.length;i++){
    swords[i].update();
    swords[i].show();
  }

}

function Sword(x,y,len){
  this.position = createVector(x,y);
  this.len = len;
  this.update = function(){
    this.position.x = sin(frameCount*0.01)* width*0.4 +  width*0.4;
    this.len = 200*(1.5-map(dist(this.position.x,this.position.y,width/2,height/2),0,width/2,0,1));
  };
  this.show = function(){
    var x = this.position.x;
    var y = this.position.y;
    fill(220);
    triangle(x,y,x-this.len/30,y+this.len,x-this.len/20,y);
    fill(220);
    triangle(x,y,x+this.len/30,y+this.len,x+this.len/20,y);
    fill(250);
    triangle(x,y,x-this.len/30,y+this.len,x,y+this.len*1.10);
    fill(200);
    triangle(x,y,x+this.len/30,y+this.len,x,y+this.len*1.10);
    rect(x-this.len*0.03,y-this.len*0.2,this.len*0.06,this.len*0.2);
    rect(x-this.len*0.20,y-this.len/30,this.len*0.4,this.len/30);
    ellipse(x-this.len*0.20,y-this.len/60,this.len*0.07,this.len*0.07);
    ellipse(x+this.len*0.20,y-this.len/60,this.len*0.07,this.len*0.07);
    ellipse(x,y-this.len*0.2,this.len*0.1,this.len*0.1);
    ellipse(x,y-this.len*0.2,this.len*0.03,this.len*0.03);
  };
}
