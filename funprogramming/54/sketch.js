var nouns = ["forest","tree","flower","sky","grass","mountain","book"];
var adjectives = ["white","cold","hot","infinite","quaint","invisible","sad"];
var verbs = ["kisses","hits","sees","touches","listens to","admires"];
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textAlign(CENTER);
  fill(255);
  frameRate(1);
  textSize(20);
}

function draw() {
  background(0);
  var sentence = nounPhrase() + " " + verbPhrase() + " " + nounPhrase();
  text(sentence,width/2,height/2);
}

function getOneOf(listOfStuff){
  return listOfStuff[floor(random(listOfStuff.length))]
}

function nounPhrase(){
  return getOneOf(["the","a"]) + " " + getOneOf(adjectives) + " " + getOneOf(nouns)
}

function verbPhrase(){
  return getOneOf(verbs);
}
