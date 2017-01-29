var st;
var chain = {};
var order = 2;
var lines;
var start;
var seeder;
var peotPara;
var newPeom;
var peomUrl;
var myUrl;
var baseUrl;
var currentU;
var myCanvas;
var loading = true;

function setup() {
  /* basic p5 setup */
  myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.style('z-index','-1');
  myCanvas.style('position','absolute');
  /* get the url and look if there is a seed value  */
  currentU = window.location.href;
  if(currentU.indexOf("?v=") < 0){
    baseUrl = currentU;
  } else {
    baseUrl = currentU.substring(0,currentU.indexOf("?v="));
    }
  /* generate the markov chain */
  lines = loadStrings("../texte/alice.txt", textLoaded);
}

function draw() {
  background(0);
  if(loading){
    fill(150);
    ellipse(width/2-80,40,sin(frameCount*0.02)*40,sin(frameCount*0.02)*40);
    ellipse(width/2,40,sin(frameCount*0.02+50)*40,sin(frameCount*0.02+50)*40);
    ellipse(width/2+80,40,sin(frameCount*0.02+100)*40,sin(frameCount*0.02+100)*40);
  }
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

function generateChain(){
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

}

function textLoaded(){
  generateChain();
  /* create the html elements for displaying the generated text 
  * and filling them with the first text  */
  peotPara = createP();
  newPeom = createButton("Click here for a new Peom");
  peomUrl = createP();
  if(currentU.indexOf("?v=") < 0){
    seeder = round(random(1000000));
  } else {
    seeder = currentU.substring(currentU.indexOf("?v=")+3,currentU.length);
    }
  generateParagraph();
  /* adding an event handler to the button to generate a new text */
  newPeom.mousePressed(newParagraph);
  loading = false;
}

/* try this one: 422595 */
