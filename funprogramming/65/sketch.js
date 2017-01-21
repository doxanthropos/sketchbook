var trackerList = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0);
  for(var i = 0;i<trackerList.length;i++){
    trackerList[i].update();
    trackerList[i].show();
  }
}

function tracker(x,y){
  this.power = random(50);
  this.x = x;
  this.y = y;
  this.destx = random(width);
  this.desty = random(height);
  this.colour = random(255);
  this.distance = dist(this.x,this.y,this.destx,this.desty);
  this.update = function(){
    this.x = lerp(this.x,this.destx,0.1);
    this.y = lerp(this.y,this.desty,0.1);
    this.distance = dist(this.x,this.y,this.destx,this.desty);
    if(this.distance<1){
      this.destx = random(width);
      this.desty = random(height);
      this.distance = dist(this.x,this.y,this.destx,this.desty);
      this.power = random(50);
      }
    }
  this.show = function(){
    noStroke();
    fill(this.colour,255,255);
    ellipse(this.x,this.y,this.power,this.power);
    if(this.distance < 50){
      stroke(this.colour,255,255);
      noFill();
      ellipse(this.x,this.y,50-this.distance,50-this.distance);
    }
  }
}

function mousePressed(){
  trackerList.push(new tracker(mouseX,mouseY));
}
