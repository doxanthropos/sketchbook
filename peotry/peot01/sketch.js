var st;
var chain = {};
var order = 4;
var lines;
var start;
var seeder;
var peotPara;
var newPeom;
var peomUrl;
var myUrl;
var baseUrl;
var currentU;

function preload(){
  lines = loadStrings("dunwich1.txt");
}
function setup() {
  noCanvas();
  noLoop();
  currentU = window.location.href;
  if(currentU.indexOf("?v=") < 0){
    baseUrl = currentU;
  } else {
    baseUrl = currentU.substring(0,currentU.indexOf("?v="));
    }
}

function draw() {
   for(var j = 0;j<lines.length-order;j++){
     st = lines[j];
     if(st.length>order){
     for(var i = 0;i<st.length-order;i++){
      var gram = st.substring(i,i+order);
      if(chain[gram]){
        chain[gram].push(st[i+order]);
      } else {
        chain[gram] = [st[i+order]];
      }
    }
     }
  }
  peotPara = createP();
  newPeom = createButton("Click here for a new Peom");
  peomUrl = createP();
  if(currentU.indexOf("?v=") < 0){
    seeder = round(random(1000000));
  } else {
    seeder = currentU.substring(currentU.indexOf("?v=")+3,currentU.length);
    } 
  generateParagraph();
  newPeom.mousePressed(newParagraph);
}

function newParagraph(){
  seeder = round(random(1000000));
  generateParagraph();
}

function generateParagraph(){
   
  randomSeed(seeder);
  myUrl = baseUrl + "?v=" + seeder;
  start = "When";
  for(var i = 0;i<300;i++){
    var gram = start.substring(start.length-(order), start.length);
    if(chain[gram]){
    start = start + random(chain[gram]);
    } else { start = start.substring(0,start.length -1);i--;}
  }
  for(var i = 0;i<start.length;i++){
    if(start[i]=="."){
      start = start.substring(0,i+1) + "\n" + start.substring(i+1,start.length);
      i++;
    }
  }
  peotPara.html(start);
  console.log(seeder);
 
  peomUrl.html("Permalink to this Peom: " + myUrl);
}

/* try this one: 286768
 * or this one: 767571  */
