var a = 0;
var img;
var b;
var sponge = [];

function preload(){
  img = loadImage("./marble.jpg");
}
function setup() {
  createCanvas(400,400,WEBGL);
  background(50);
  b = new Box(0,0,0,150);
  sponge.push(b);
}
function draw() {
  background(100);
  rotateX(a);
  rotateY(a * 0.5);
  rotateZ(a * 0.3);
  var dirY = (mouseY / height - 0.5) *2;
  var dirX = (mouseX / width - 0.5) *2;
  directionalLight(250, 250, 250, dirX, -dirY, 0.25);
  ambientMaterial(250);
  texture(img);
  for(var i = 0; i < sponge.length; i++){
    sponge[i].show();
  }
  a = a + 0.01;
}

function Box(x,y,z,r){
  this.x = x;
  this.y = y;
  this.z = z;
  this.r = r;

  this.show = function(){
    push();
    translate(this.x,this.y,this.z);
    box(this.r,this.r,this.r,this.r);
    pop();
  }
  this.generate = function(){
    var boxes = [];
    for(var x = -1; x < 2; x++){
      for(var y = -1; y < 2; y++){
        for(var z = -1; z < 2; z++){
          let sum = abs(x) + abs(y) + abs(z);
          console.log(sum);
          var br = this.r /3;
          var bx = this.x + x * br;
          var by = this.y + y * br;
          var bz = this.z + z * br;
          if(sum>1){
            var b = new Box(bx,by,bz,br);
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }
}

function mousePressed(){
  var next = [];
  for(var i = 0; i < sponge.length; i++){
    var newBoxes = sponge[i].generate();
    for(var e = 0; e < newBoxes.length; e ++){
      next.push(newBoxes[e]);
    }

  }
  sponge = next;
}
