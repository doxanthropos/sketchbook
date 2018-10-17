const values = {
  "0": 0x7E,
  "1": 0x30,
  "2": 0x6D,
  "3": 0x79,
  "4": 0x33,
  "5": 0x5B,
  "6": 0x5F,
  "7": 0x70,
  "8": 0x7F,
  "9": 0x7B,
  "A": 0x77,
  "b": 0x1F,
  "C": 0x4E,
  "d": 0x3D,
  "E": 0x4F,
  "F": 0x47
};
let count = 0;
let relY;
let relX;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  //frameRate(1);
  relY = windowHeight / 2 - 150;
  relX = windowWidth / 2 -600;
}
function draw() {
  push();
  if(windowWidth < 1200){
    scale(windowWidth / 1200, windowWidth / 1200);
    relX = 0;
  }
  let blink = 40;
  let currTime = new Date();
  let hours = (currTime.getHours() < 10 ? '0' : '') + currTime.getHours();
  let minutes = (currTime.getMinutes() < 10 ? '0' : '') + currTime.getMinutes();
  let seconds = (currTime.getSeconds() < 10 ? '0' : '') + currTime.getSeconds();
  let mseconds = currTime.getMilliseconds();
  if(mseconds < 50){
    blink = 299;
  }
  background(0);
  // Hours
  display(values[hours[0]],relX,relY);
  display(values[hours[1]],relX + 180,relY);
  colons(blink,relX +360,relY);
  // Minutes
  display(values[minutes[0]],relX + 400,relY);
  display(values[minutes[1]],relX + 580,relY);
  colons(blink,relX + 760,relY);
  // Seconds
  display(values[seconds[0]],relX + 800,relY);
  display(values[seconds[1]],relX + 980,relY);
  count = (count + 1) % 9;
  pop();
}

function display(value,x,y){
  
  function getColor(val, shift){
    let r = 0;
    let g = 255;
    let b = 0;
    let a = 40 + 255 * ((val >> shift) & 1);
    return color(r,g,b,a);
  }
  push();
  translate(x,y);
  stroke(0,100,0);
  strokeWeight(3);
  // A
  fill(getColor(value,6));
  beginShape();
  vertex(32,30);
  vertex(42,20);
  vertex(138,20);
  vertex(148,30);
  vertex(138,40);
  vertex(42,40);
  endShape(CLOSE);
  // B
  fill(getColor(value,5));
  beginShape();
  vertex(150,32);
  vertex(160,42);
  vertex(160,138);
  vertex(150,148);
  vertex(140,138);
  vertex(140,42);
  endShape(CLOSE);
  // C
  fill(getColor(value,4));
  beginShape();
  vertex(150,152);
  vertex(160,162);
  vertex(160,258);
  vertex(150,268);
  vertex(140,258);
  vertex(140,162);
  endShape(CLOSE);
  // D
  fill(getColor(value,3));
  beginShape();
  vertex(32,270);
  vertex(42,258);
  vertex(138,258);
  vertex(148,270);
  vertex(138,280);
  vertex(42,280);
  endShape(CLOSE);
  // E
  fill(getColor(value,2));
  beginShape();
  vertex(30,152);
  vertex(40,162);
  vertex(40,258);
  vertex(30,268);
  vertex(20,258);
  vertex(20,162);
  endShape(CLOSE);
  // F
    fill(getColor(value,1));
  beginShape();
  vertex(30,32);
  vertex(40,42);
  vertex(40,138);
  vertex(30,148);
  vertex(20,138);
  vertex(20,42);
  endShape(CLOSE);
  // G
  fill(getColor(value,0));
  beginShape();
  vertex(32,150);
  vertex(42,140);
  vertex(138,140);
  vertex(148,150);
  vertex(138,160);
  vertex(42,160);
  endShape(CLOSE);
  pop();
}

function colons(state, x, y){
  stroke(0,100,0);
  strokeWeight(3);
  fill(0,255,0,state);
  push();
  translate(x,y);
  beginShape();
  vertex(20,80);
  vertex(30,90);
  vertex(20,100);
  vertex(10,90);
  endShape(CLOSE);
  beginShape();
  vertex(20,200);
  vertex(30,210);
  vertex(20,220);
  vertex(10,210);
  endShape(CLOSE);
  pop();
}
