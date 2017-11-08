/*
followed along with this Coding Challenge:
https://www.youtube.com/watch?v=E1B4UoSQMFw
added some colors
*/
var sentence = "F";
var rules = [];
var button;
var len = 150;
var angle;

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
};

function generate(){
  len*=0.5;
  var nextSentence = "";
  for (var i=0;i<sentence.length;i++){
    var current = sentence.charAt(i);
    var found = false;
    for(var j=0;j<rules.length;j++){
      if(current==rules[j].a){
        found = true;
        nextSentence+=rules[j].b;
      }
      if(!found){
        nextSentence+=current;
      }
    }
  }
  sentence = nextSentence;
  console.log(sentence);
  turtle();
}

function turtle(){
  resetMatrix();
  background(0);
  translate(width/2,height);
  for(var i=0;i<sentence.length;i++){
    var current = sentence.charAt(i);
    var color = map(i,0,sentence.length,0,360);
    stroke(color,100,100);
    if(current=="F"){
      line(0,0,0,-len);
      translate(0,-len);
    } else if(current=="+"){
      rotate(angle);
    } else if(current=="-"){
      rotate(-angle);
    } else if(current=="["){
      push();
    } else if(current=="]"){
      pop();
    }
  }
}
function setup() {
  angle = radians(25);
  var canvas = createCanvas(600,600);
  canvas.parent("canvas");
  background(0);
  button = createButton("Generate");
  button.mousePressed(generate);
  button.parent("content");
  colorMode(HSB);
  turtle();
}
function draw() {
  //turtle();
}
