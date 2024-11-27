const canvas = document.getElementById("canvasGame");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height /2;
let dx = 0;
let dy = -2;

console.log("Hello World");


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    if (y < 0) {
      x = canvas.width / 2;
      y = canvas.height /2;
    }
  }

  canvas.addEventListener("mouseup", (e) => {
    if (e.button == 0){
        setInterval(draw, 10);
    }
  });