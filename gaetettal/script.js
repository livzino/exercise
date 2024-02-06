"use strict";

let lownum = 0;
let highnum = 100;
let computerGuess;

computerGuess = lownum + (highnum - lownum) / 2;
console.log(computerGuess);
const h1 = document.querySelector("h1");

//gaetTal();
//function gaetTal() {
// computerGuess = Math.round(Math.random() * 100);
//}

h1.textContent = `jeg gætter på ${computerGuess}`;

//  if (userGuess === computerGuess) {
//     alert("Tillykke!");
document.querySelector(".forhoejt").addEventListener("click", forh);
document.querySelector(".forlavt").addEventListener("click", forl);
document.querySelector(".rigtigt").addEventListener("click", rigt);

forh();
function forh(lownum, highnum) {
  console.log("for højt");
  return lownum + (highnum - lownum) / 2;
}

let forhl = forh(0, 50);
console.log(forhl);

forl();

function forl(lownum, highnum) {
  console.log("for lavt");
  return lownum + (highnum - lownum) / 2;
}

let forll = forl(50, 100);
console.log(forll);

function rigt() {
  console.log("rigtigt");
}

let rigtt = rigt();
console.log(rigtt);

while (computerGuess != forh()) {
  computerGuess = lownum + (highnum - lownum) / 2;
  if (computerGuess > forh());
  highnum = computerGuess;
  attempts + -1;
  console.log(computerGuess);
}
