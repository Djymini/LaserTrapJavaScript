/*
//Exercice 1
console.log("EXERCICE1");
console.log("J'aime peindre");
console.log("J'aimerai devenir peintre");
console.log("J'aime peindre. J'aimerai devenir peintre");
console.warn("Mais cela demande beaucoup d'effort")
console.error("Je n'ai pas assez de temps car j'ai déjà un métier, 3 passions, une femme et 4 enfants et je dois dormir la nuit");

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

//Exercice 2
const name = "Bruno";

const description = "Salut je m'appelle Bruno et voici ma description";

let work = "Analyste financier au Yémen";

let age = 23;

let city = "Bordeaux";

let arrayNumber = "Une liste de nombres";

let bondName = "le prénom du plus grand agent secret de tous les temps";

//Exercice 3
console.log("EXERCICE3");
const firstname = "Michel";
const lastname = "Polnareff";
let age2 = 123;
const isUserLoggedIn = false;
const account = undefined;
let account2;
const myVar = null;
const user = {
    firstname: "Michel",
    lastname: "Polnareff",
    email: "mich-mich@pol.com"
}
const colors = ['red', 'blue', 'green'];
const onSayHello = function sayHello() {
    return 'Hello';
}
console.log("firstname : " + typeof(firstname));
console.log("lastname : " + typeof(lastname));
console.log("age2 : " + typeof(age2));
console.log("isUserLoggedIn : " + typeof(isUserLoggedIn));
console.log("account : " + typeof(account));
console.log("account2 : " + typeof(account2));
console.log("myVar : " + typeof(myVar));
console.log("user : " + typeof(user));
console.log("colors : " + typeof(colors));
console.log("onSayHello : " + typeof(onSayHello));

//Exercice4
const guessName = "Sphinx";
const comparedString = "secret"

if (guessName == "Sphinx"){
  console.log("Vive l'Égypte");
}

let mdpQuestion = prompt("Saisir mot de passe :");
if (mdpQuestion == comparedString){
  console.log("Bienvenue BG ! 🙌 dans la console");
}
else {
  console.log("Non");
}

let ageQuestion = prompt("Quel est votre age");
if (ageQuestion < 3){
  console.log("Hello, Baby 🍼!");
}
else if (ageQuestion < 18) {
  console.log("Hi! 👋");
}
else if (ageQuestion > 100) {
  console.log("Greetings 🖖");
}
else {
  console.log("Wow... 😲");
}


let bobNameQuestion = prompt("Quel est votre nom ?");
let bobAgeQuestion = prompt("Quel est votre Age ?");
if ((bobNameQuestion == "Bob" || bobNameQuestion == "bob") && bobAgeQuestion == 30) {
  console.log("Welcome");
}
else {
  console.log("Go away");
}

const animal = {
  name: "Lucky",
  specie: "Cat",
  color: "Black"
}

animal.name === "Lucky" ? console.log("Voici un Pôtichat mignon") : console.log("Argh ! Ce n'est pas mon chat...");

const n1 =  1
const n2 =  13
const n3 =  20
const n4 =  41
const n5 =  70
const n6 =  100

if (n1%2 == 0) {
  console.log(n1 + ' est paire ✅');
}
else {
  console.log(n1 + ' est impair');
}
if (n2%2 == 0) {
  console.log(n2 + ' est paire ✅');
}
else {
  console.log(n2 + ' est impair');
}
if (n3%2 == 0) {
  console.log(n3 + ' est paire ✅');
}
else {
  console.log(n3 + ' est impair');
}
if (n4%2 == 0) {
  console.log(n4 + ' est paire ✅');
}
else {
  console.log(n4 + ' est impair');
}
if (n5%2 == 0) {
  console.log(n5 + ' est paire ✅');
}
else {
  console.log(n5 + ' est impair');
}
if (n6%2 == 0) {
  console.log(n6 + ' est paire ✅');
}
else {
  console.log(n6 + ' est impair');
}*/

//Exercice 5
function addKevin(a,b){
  return a+b;
}
console.log(addKevin(2,8))

function mathKevin(a,b) {
  return Math.sqrt(a) + Math.pow(b,7);
}

console.log(mathKevin(2,8))

function question() {
  let question1 = prompt("Quel langage faut-il apprendre avant de faire du java script ?");
  let question2 = prompt("Quel est l'autre langage à apprendre avant de faire du java script ?");
  if (question1 == "html" && question2 == "css") {
    return true;
  }
  else {
    return false;
  }
}

let startFormation = question();

if (startFormation) {
  console.log("Bienvenue en JS jeune éphèbe");
}
else {
  console.log("Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais");
}



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