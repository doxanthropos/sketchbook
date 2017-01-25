var sentences = [];
var nouns = ["forest","tree","flower","sky","grass","mountain","book"];
var adjectives = ["white","cold","hot","infinite","quaint","invisible","sad"];
var verbs = ["kisses","hits","sees","touches","listens to","admires"];
var articles = ["a","the"];
var prepositions = ["on","to","in","with"]
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
  sentences.push(nounPhrase() + " " + verbPhrase());
  if(sentences.length*20 > height/2){
    sentences.splice(0,1);
  }
  for(var i = 0;i<sentences.length;i++){
    fill(0,50);
    rect(0,0,width,height);
    fill(255);
    textSize(20/sentences.length * (i+1));
    text(sentences[i],width/2,20*(i+1));
  }
  console.log(sentences.length);
}

function getOneOf(listOfStuff){
  return listOfStuff[floor(random(listOfStuff.length))]
}

function article(){
  return getOneOf(articles) + " "
}

function adjectiveP(){
  if(random(10)>5) {
    return getOneOf(adjectives) + " "
  } else return ""
}

function noun(){
  return getOneOf(nouns)
}

function nounPhrase(){
  return article() + adjectiveP() + noun() + ppP()
}

function verbPhrase(){
  return getOneOf(verbs) + " " + nounPhrase();
}

function ppP(){
  if(random(10)>8){
    return " " + getOneOf(prepositions) + " " + nounPhrase()
  } else { return "" }
}
