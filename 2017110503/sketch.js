var tree = [];
var leaves = [];
var count = 0;

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent("canvas");
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
    leaves[i].show();
  }
}

function mousePressed(){
  if(count==5){
    for(var i=0;i<tree.length;i++){
      if(tree[i].finished==false){
        var leave = new Leave(tree[i].end);
        leaves.push(leave);
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
  for(var i=0;i<leaves.length;i++){
    if(dist(leaves[i].position.x,leaves[i].position.y,mouseX,mouseY)<10){
      leaves[i].position = leaves[i].position.copy();
      leaves[i].velocity.y = 1;
    }
  }
  count ++;
}
