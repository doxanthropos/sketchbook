/* initial game settings */
var rows = 10;
var columns = 10;
var bombs = 10;
var grid = [];
var knownGrid = [];

function setup() {
  createCanvas(600,600);
  background("white");
  initializeGrid(columns,rows,bombs);
  noLoop();
}

function draw() {
  drawGrid();
  for(var i = 0;i<rows;i++){
    console.log(join(grid[i]));
  }
}

function drawGrid(){
  console.log("Drawing Grid!");
  for(var column = 0;column<columns;column++){
    for(var row = 0;row<rows;row++){
      if(knownGrid[column][row]=="X"){
        fill("green");
      } else {
        fill("white");
      }
      rect(column*width/(rows+1),row*width/(rows+1),width/(rows+1),width/(rows+1));
      console.log(width/(rows+1));
    }
  }
}

/* building a grid with bombs */
function initializeGrid(gridColumns,gridRows,gridBombs){
 for(var i = 0;i<gridRows;i++){
  grid[i] = [];
  knownGrid[i] = [];
  for(var j = 0;j<gridColumns;j++){
    grid[i][j] = "X";
    knownGrid[i][j] = "X";
  }
}
/* setting the bombs */
for(var i = 0;i<gridBombs;i++){
  var bombUnset = true;
  while(bombUnset){
    var row = Math.floor(random(gridRows));
    var column = Math.floor(random(gridColumns));
    if(grid[column][row]=="X"){
      grid[column][row]="*";
      console.log(row);
      console.log(column);
      bombUnset = false;
    }
  }
}
/* setting the danger values between 0 and 8 */
  for(var i = 0;i<gridRows;i++){
    for(var j = 0;j<gridColumns;j++){
      if(grid[i][j] == "X"){
        grid[i][j] = 0;
        /* These tests add 1 to the danger value for each neighbour that is a bomb 
        they are named by the compass directions */
        /* NE */
        if(i>0&&j>0){ if(grid[i-1][j-1] == "*"){ grid[i][j]++;}}
        /* N */
        if(i>0){ if(grid[i-1][j] == "*"){ grid[i][j]++;}}
        /* NW */
        if(i>0&&j<(gridColumns-1)){ if(grid[i-1][j+1] == "*"){ grid[i][j]++;}}
        /* W */
        if(j<(gridColumns-1)){ if(grid[i][j+1] == "*"){ grid[i][j]++;}}
        /* SW */
        if(i<(gridRows-1)&&j<(gridColumns-1)){ if(grid[i+1][j+1] == "*"){ grid[i][j]++;}}
        /* S */
        if(i<(gridRows-1)){ if(grid[i+1][j] == "*"){ grid[i][j]++;}}
        /* SE */
        if(i<(gridRows-1)&&j>0){ if(grid[i+1][j-1] == "*"){ grid[i][j]++;}}
        /* E */
        if(j>0){ if(grid[i][j-1] == "*"){ grid[i][j]++;}}
      }
    }
  }
}