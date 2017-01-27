var st;
var chain = {};
var order = 1;
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
  lines = loadStrings("../texte/dunwich.txt");
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
     st = lines[j].split(" ");
     if(st.length>order){
     for(var i = 0;i<st.length-order;i++){
      var gram = String(st[i]);
      if(chain[gram]&&Array.isArray(chain[gram])){
        chain[gram].push(String(st[i+1]));
      } else {
        chain[gram] = [String(st[i+1])];
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
  start = [random(Object.keys(chain))];
  for(var i = 0;i<30;i++){
    var gram = start[start.length -1];
    if(chain[gram]){
    start.push(random(chain[gram]));
    } else { start.pop();i--;}
  }
  for(var i = 0;i<start.length;i++){
    if(start[i]=="."){
      start = start.substring(0,i+1) + "\n" + start.substring(i+1,start.length);
      i++;
    }
  }
  var currentPeom = start.join(" ") + ".";
  currentPeom = "<span class='initial'>" + currentPeom.charAt(0).toUpperCase() + "</span>" + currentPeom.slice(1);
  peotPara.html(currentPeom);
  console.log("The random seed is: " + seeder); 
  peomUrl.html("Permalink to this Peom: " + myUrl);
}

/* try this one: 350996 */
