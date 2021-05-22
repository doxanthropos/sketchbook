var symbolSize = 16;
var symbol;
var streams = [];
var fadeInterval = 1.6;

function setup() {
  createCanvas(1500,500);
  colorMode(HSB);
  background(0);
  var x = 0;
  for (var i = 0; i <= width/symbolSize;i++){
    var stream = new Stream()
    stream.generateSymbols(x,random(-1000,0));
    streams.push(stream);
    x += symbolSize;
  }
  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0, 150);
  streams.forEach(function(stream){
    stream.render();
  });
}

function Symbol(x, y, speed, first,opacity){
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.first = first;
  this.opacity = opacity;
  this.switchInterval = round(random(2,20));

  this.setToRandomSymbol =function(){
    var symbolType = round(random(0,5));
    if(symbolType == 1){
      this.value = String.fromCharCode( 
        49 + round(random(0,41))
        );
    } else {
      this.value = String.fromCharCode(
        0x30A0 + round(random(0,95))
        );
    }
  }
  this.rain = function(){
    this.y = (this.y>= height) ? 0 : this.y += this.speed;

  }
}

function Stream(){
  this.symbols = [];
  this.totalSymbols = round(random(5,30));
  this.speed = random(5,20);

  this.generateSymbols = function(x,y){
    var first = round(random(0,4)) == 1;
    var opacity = 255;
    for(var i = 0; i <= this.totalSymbols; i++){
      symbol = new Symbol(x,y, this.speed,first,opacity);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }
  this.render = function(){
    this.symbols.forEach(function(symbol){
      if (symbol.first){
        fill(map(symbol.x,width,0,255),55,255,symbol.opacity);
      } else {
        fill(map(symbol.x,0,width,0,255),255,255,symbol.opacity);
      }
    text(symbol.value, symbol.x, symbol.y);
    if(frameCount % symbol.switchInterval == 0){
      symbol.setToRandomSymbol();
    }
    symbol.rain();      
    })
  }
}
