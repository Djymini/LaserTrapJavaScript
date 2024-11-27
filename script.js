//Exercice 1
console.log("J'aime peindre");
console.log("J'aimerai devenir peintre");
console.log("J'aime peindre. J'aimerai devenir peintre");
console.warn("Mais cela demande beaucoup d'effort")
console.error("Je n'ai pas assez de temps car j'ai déjà un métier, 3 passions, une femme et 4 enfants et je dois dormir la nuit");

//Exercice 2
const number1 = 99;//
const number2 = 50;//
const number3 = 1;//
const number4 = 7;//
const number5 = 3;//
const number6 = 10;
const number7 = 8;//
const number8 = 2;
const number9 = 1;//
const number10 = 4;

const set1 = (number1/number5)+number7+number3;
const set2 = number2-(number4 +number9);
const set3 = number10*number6 + number8;
console.log(set1);
console.log(set2);
console.log(set3);

console.log(6%2);
console.log(14%4);
console.log(99%3);

/*const canvas = document.getElementById("canvasGame");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height /2;
let dx = 0;
let dy = -2;

console.log("Coucou Hibou coucou hibou");
console.warn("Ceci est un avertissement");
console.error("ceci est une erreur");

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
  });*/