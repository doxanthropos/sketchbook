/* initial game settings */
var rows = 10;
var columns = 10;
var bombs = 10;
var grid = [];
var knownGrid = [];
var playing = false;
var lost = false;
var warningColors = ["white","#d4ff00","#ffff00","#ffd500","#ffaa00","#ff8000","#ff5500","#ff1500","#ff0000"]
var currentSize;
var cell;

function setup() {

  if (windowWidth>windowHeight){
    currentSize = windowHeight;
  } else {
    currentSize = windowWidth;
  }
  cell = currentSize / rows;
  createCanvas(currentSize,currentSize);
  background("white");
  initializeGrid(columns,rows,bombs);
  //noLoop();
}

function draw() {
  if(playing) { drawBoard(); 
  for(var i = 0;i<rows;i++){
  }
  } else {
    drawMenu();
  }
}

function drawBoard(){
  drawGrid();
  drawSidebar();
}

/* drawing the known grid */
function drawGrid(){
  for(var column = 0;column<columns;column++){
    for(var row = 0;row<rows;row++){
      if(knownGrid[column][row]=="X"){
        fill("green");
        rect(column*cell,row*cell,cell,cell);
      } else if(knownGrid[column][row]==0){
        fill("white");
        rect(column*cell,row*cell,cell,cell);
      } else if(knownGrid[column][row]=="*"){
        fill("black");
        rect(column*cell,row*cell,cell,cell);
      } else {
        fill(warningColors[knownGrid[column][row]]);
        rect(column*cell,row*cell,cell,cell);
      }
      
    }
  }
}

function drawSidebar(){
  
}
/* This function will display the start menu */
function drawMenu(){
  if(lost){
    background("black");
  }
  fill("blue");
  ellipse(width/2,height/2,currentSize/2,currentSize/2);
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

function mousePressed(){
  if(playing){
  var selectedColumn = Math.floor(mouseX / cell)
  var selectedRow = Math.floor(mouseY / cell)
  console.log(mouseX + ":" +selectedColumn);
  dig(selectedColumn,selectedRow);
  }  else {
    if(mouseX>currentSize/4&&mouseX<(currentSize/4*3)&&mouseY>currentSize/4&&mouseY<(currentSize/4*3)){
      playing = true;
      background("white");
      initializeGrid(columns,rows,bombs);
    }
}
function dig(selectedColumn,selectedRow){
  knownGrid[selectedColumn][selectedRow] = grid[selectedColumn][selectedRow];
  if(grid[selectedColumn][selectedRow]=="*"){
    playing = false;
    lost = true;
  }
  if(grid[selectedColumn][selectedRow]==0){
    /* digging recursively into empty spaces */
            /* NE */
        if(selectedColumn>0&&selectedRow>0&&knownGrid[selectedColumn-1][selectedRow-1]=="X"){ dig(selectedColumn-1,selectedRow-1); }
        /* N */
        if(selectedColumn>0&&knownGrid[selectedColumn-1][selectedRow]=="X"){ dig(selectedColumn-1,selectedRow); }
        /* NW */
        if(selectedColumn>0&&selectedRow<(columns-1)&&knownGrid[selectedColumn-1][selectedRow+1]=="X"){ dig(selectedColumn-1,selectedRow+1); }
        /* W */
        if(selectedRow<(columns-1)&&knownGrid[selectedColumn][selectedRow+1]=="X"){ dig(selectedColumn,selectedRow+1);}
        /* SW */
        if(selectedColumn<(rows-1)&&selectedRow<(columns-1)&&knownGrid[selectedColumn+1][selectedRow+1]=="X"){ dig(selectedColumn+1,selectedRow+1); }
        /* S */
        if(selectedColumn<(rows-1)&&knownGrid[selectedColumn+1][selectedRow]=="X"){ dig(selectedColumn+1,selectedRow); }
        /* SE */
        if(selectedColumn<(rows-1)&&selectedRow>0&&knownGrid[selectedColumn+1][selectedRow-1]=="X"){ dig(selectedColumn+1,selectedRow-1); }
        /* E */
        if(selectedRow>0&&knownGrid[selectedColumn][selectedRow-1]=="X"){ dig(selectedColumn,selectedRow-1); }
  }
  }
}