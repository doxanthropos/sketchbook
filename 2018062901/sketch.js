var ctx, terminus, unifont;
var streams = [];
var symbolSize = 20;
//function preload(){
  /*
   * loading a nice terminal font called Terminus
   * source: https://github.com/tisimst/vecterminus
   * for the unicode characters, I choose Unifont:
   * http://unifoundry.com/unifont.html
   */
  //terminus = loadFont('fonts/VecTerminus12Medium.otf');
  //unifont = loadFont('fonts/unifont-11.0.01.ttf');
// }

function setup() {
  ctx = createCanvas(windowWidth, windowHeight);
  ctx.position(0,0);
  ctx.style('z-index', '-1');
  background(0);
  for(var i = 0; i <= width / symbolSize; i++){
    var x = i * symbolSize;
    stream = new Stream(x);
    stream.generateSymbols();
    streams.push(stream);
  }
  s = new Stream();
  s.generateSymbols();
}
function draw() {
  background(0);
  streams.forEach(function(stream){
    stream.show();});
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  background(0);
}

function Letter(x,y,speed){
  this.x = x;
  this.y = y;
  this.interval = round(random(2,20));
  //this.setSymbol = function(){ return round(random(0,10)).toString();};
  this.setSymbol = function(){
    return String.fromCharCode(
      35 + round(random(0, 90)));;
  };
  this.c = this.setSymbol();
  this.speed = speed;
  this.rain = function(){
    this.y = (this.y >=height) ? 0 : this.y += this.speed;
  }
}

  function Stream(x){
    this.x = x;
  this.symbols = [];
  this.totalSymbols = round(random(5,30));
  this.speed = random(5, 20);

  this.generateSymbols = function(){
    var y = 0;
    var x = this.x;
    for (var i = 0; i <= this.totalSymbols; i++){
      symbol = new Letter(x,y,this.speed);
      this.symbols.push(symbol);
      y -= symbolSize;
    }
  }
  this.show = function(){
    this.symbols.forEach(function(symbol){
          if(frameCount%symbol.interval==0){
	    symbol.c = symbol.setSymbol();
	  }
      symbol.rain();
      fill(50,50,255);
      textFont("Courier New");
      textSize(symbolSize);
      text(symbol.c,symbol.x,symbol.y);
    });
  }
}
