/*
 * 11.1: Introduction to Chrome Extensions
 * https://www.youtube.com/watch?v=hkOTAmmuv_4
 * 11.2: Bookmarklets
 * https://www.youtube.com/watch?v=DloHqUfPbJc&t=215s
*/

(function(){
  /*
  Create a canvas element:
  make it fill the window and move it to the background
  */
  var canvas = document.createElement('canvas');
  canvas.style.width = window.innerWidth;
  canvas.style.height = window.innerHeight;
  canvas.style.zIndex = -1;
  canvas.style.position = 'absolute';
  canvas.style.left = "0px";
  canvas.style.top = "0px";
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
})();
