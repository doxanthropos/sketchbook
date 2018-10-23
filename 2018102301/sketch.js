let num = "10001000";
let keyP = "";
let byte = [];

function setup() {
  createCanvas(800,600);
  binaryToDecimal(num);
  let w = width / 8;
  for (let i = 0; i < 8; i++){
    byte[i] = new Bit(i*w+w/2, height/2, w-6);
    byte[i].setState(num.charAt(i));
  }
}
function draw() {
  background(0);
  num = "";
  for (let i = 0; i < 8; i++){
    byte[i].show();
    num += (byte[i].state === 1 ? "1" : "0");
  }
  textAlign(CENTER);
  stroke(0, 100, 0);
  fill(0, 255, 0);
  textSize(40);
  text(binaryToDecimal(num), width/2, 150);
  text(keyP, width/2, 50);
  textSize(30);
  text("Press letter keys to see their binary code", width/2, 550);
}

function binaryToDecimal(val){
  let sum = 0;
  for (let i = 0; i < val.length; i++){
    let bit = val.charAt(val.length -i -1);
    sum += parseInt(bit) * pow(2, i);
  }
  return sum;
}

function mousePressed(){
  for (let i = 0; i < byte.length; i++) {
    byte[i].toggle(mouseX,mouseY);
  }
}

function keyPressed(){
  console.log(key);
  console.log(key.charCodeAt(0));
  if(key.charCodeAt(0) > 64 && key.charCodeAt(0) < 123 && key.length == 1){
    num = decimalToBinary(key.charCodeAt(0));
    for (let i = 0; i < 8; i++){
      byte[i].setState(num.charAt(i));
    }
    keyP = key;
  }
}

function decimalToBinary(val){
  let binaryNumber = "0".repeat(8 - val.toString(2).length) + val.toString(2);
  console.log("BIN: " + binaryNumber);
  return binaryNumber;
}
