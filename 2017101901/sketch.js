let particles = [];
function setup() {
  createCanvas(600,500);
  background(0);
}
function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);
  for (let i = particles.length - 1; i >= 0; i--){
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i,1); 
    }
  }
}

function mousePressed() {
  let p = new Particle();
  particles.push(p);
}

class Particle {
  constructor() {
    this.x = 300;
    this.y = 480;
    this.vx = random(-1,1);
    this.vy = random(-5,-1);
    this.gravitation = 0.02;
    this.alpha = 255;
  }

  show() {
    noStroke();
    fill(255,this.alpha);
    ellipse(this.x,this.y,16);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravitation;
    this.alpha -= 1;
  }

  finished() {
    return this.alpha < 0;
  }
}
