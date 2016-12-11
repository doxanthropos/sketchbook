/* initial game settings */
var rows = 10;
var columns = 10;
var bombs = 10;
var grid = [];

function setup() {
  createCanvas(600,600);
  background("white");
  initializeGrid(columns,rows,bombs);
  noLoop();
}

function draw() {

  for(var i = 0;i<rows;i++){
    console.log(join(grid[i]));
  }
}


/* building a grid with bombs */
function initializeGrid(gridColumns,gridRows,gridBombs){
 for(var i = 0;i<gridRows;i++){
  grid[i] = [];
  for(var j = 0;j<gridColumns;j++){
    grid[i][j] = "X";
  }
}
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
}