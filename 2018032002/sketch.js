window.onload = function(){
  var c = document.getElementById("canvas"),
      ctx = c.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;
  ctx.translate(0,height/2);  for(var angle = 0; angle < Math.PI * 2; angle += 0.01){
    var x = angle * 200,
	y = Math.sin(angle) * 200;
    ctx.fillRect(x,y,5,5);
  }
};
