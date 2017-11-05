/*
This sketch is is just the result of following Dan Shiffman on his video:
https://www.youtube.com/watch?v=0jjeOYMjmDU&t=15s
Coding Challenge #14: Fractal Trees - Recursive
*/
var tree = [];
var leaves = [];
var count = 0;
function setup() {
  createCanvas(600,600);
  background(0);
  stroke(200);
  var root = new Branch(createVector(width/2,height),createVector(width/2,height-100));
  tree[0] = root;
}
function draw() {
  background(0);
  for(var i=0;i<tree.length;i++){
    tree[i].show();
    tree[i].jitter();
  }
  for(var i=0;i<leaves.length;i++){
    noStroke();
    fill(255,0,255,100);
    ellipse(leaves[i].x,leaves[i].y,10,10);
  }
}

function mousePressed(){
  if(count==5){
    for(var i=0;i<tree.length;i++){
      if(tree[i].finished==false){
        leaves.push(tree[i].end);
      }
    }
  } else if(count<5) {
    var treeLength = tree.length;
    for(var i=0;i<treeLength;i++){
      if(tree[i].finished==false){
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
      }
    }
  }
  count ++;
}
