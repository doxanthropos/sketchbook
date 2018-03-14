var colors = [[55,255,217],[37,248,177],[199,233,180],[127,205,187],[65,182,196],[29,145,192],[34,94,168],[37,52,148],[8,29,88]];
var pos;
var rot = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  translate(width/2,height/2);
  pos = createVector(0,0);
}
function draw(){
  move();
  noLoop();
}

function move(){
  translate(width/2,height/2);
  var direction = createVector(0,-20);
  direction.rotate(radians(rot));
  var nextPos =  p5.Vector.add(pos,direction);
  var colour = round(map(dist(nextPos.x,nextPos.y,0,0),0,dist(0,0,width/2,height/2),0,colors.length-1))
  stroke(colors[colour][0],colors[colour][1],colors[colour][2]);
  console.log(colour);
  line(pos.x,pos.y,nextPos.x,nextPos.y);
  pos = nextPos;
  console.log("Rotation: " + rot + " Pos: " + pos);
  rot = (rot - 60 * floor(random(7))) % 360;
}

function nextStep(posi){
  var direction = createVector(0,-20);
  direction.rotate(radians(rot));
  var ns = p5.Vector.add(posi,direction);
  return ns;
}

function mouseMoved(){
  loop();
}
