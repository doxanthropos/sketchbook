var bgColor = 0;
var amplitude = 0;
var osc;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textAlign(CENTER);
  textSize(windowWidth/30);
  textFont("monospace");
  stroke(255,0,0);
  fill(255,0,0);
  
  // instead of the Audio API Oscillator node p5 has its own oscillator object
  // one difference that is obvious even in this small example is that is has an amplitude
  // method called amp(), that not only changes the amplitude from one value to another,
  // but also makes smooth transitions between them.
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(440);
  osc.amp(amplitude);
  osc.start();
}

function draw() {
  text("Click on the screen to play and adjust volume", width/2, height/3);
  text("Left is lower volume, right is higher volume", width/2, height/3*2);
}

function mouseClicked(){
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY<height){
    var newAmplitude = map(mouseX,0,width,0,1);
    console.log(newAmplitude);
    osc.amp(newAmplitude,0.5);
    console.log(osc.amp());
    amplitude=newAmplitude;
    background(map(mouseX,0,width,0,255));
  }
}