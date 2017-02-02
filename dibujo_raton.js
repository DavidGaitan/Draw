var canvas = document.getElementById("canvas").getContext("2d");
// var button = document.getElementById("button")
document.addEventListener("mousedown",DibujoClickDown)
document.addEventListener("mouseup",DibujoClickUp)
document.addEventListener("mousemove",DibujoClickMove)
var color = "black"
var x;
var y;
var si = false
dibujo(color,1,499,1,1)
dibujo(color,499,1,1,1)
dibujo(color,1,499,499,499)
dibujo(color,499,499,499,1)

function DibujoClickDown(down) {
  console.log("down")
  si = true;         //click presionado
  x = down.layerX;
  y = down.layerY;


}

function DibujoClickUp(up) {
  console.log("Up")
  si = false;         //click presionado
  x = up.layerX;
  y = up.layerY;
}

function DibujoClickMove(move) {
  console.log("Move")
  if (si == true) {
    dibujo(color,x,y,move.layerX,move.layerY)
  }
  x = move.layerX
  y= move.layerY
}

function dibujo(color,x_ini,y_ini,x_fini,y_fini) {
  canvas.beginPath()
  canvas.strokeStyle = color
  canvas.moveTo(x_ini,y_ini)
  canvas.lineTo(x_fini,y_fini)
  canvas.lineWidth = 3;
  canvas.stroke()
  canvas.closePath()
}


// function consoleDibujoClick(click) {
//
//   console.log(click)
//
// }
