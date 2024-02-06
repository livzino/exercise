"use strict";
let lownum = 0;
let highnum = 100;
let computerGuess;
let h1 = document.querySelector("h1");
//document.querySelector(".forhoejt").addEventListener("click", forh);
//document.querySelector(".forlavt").addEventListener("click", forl);
document.querySelector(".forhoejt").addEventListener("click", tooLowOrHigh);
document.querySelector(".forlavt").addEventListener("click", tooLowOrHigh);

computerGuess();
function computerGuess() {
  computerGuess = Math.round(lownum + (highnum - lownum) / 2);
  h1.TexttextContent = `jeg gætter på ${computerGuess}`;
}

function tooLowOrHigh(evt) {
  console.log(evt.target.id);
  if (evt.target.id === "toolo") {
    lownum = computerGuess;
  } else {
    highnum = computerGuess;
  }
  computerGuess();
}

//gaetTal();
//function gaetTal() {
// computerGuess = Math.round(Math.random() * 100);
//}

// forh();
// function forh(lownum, highnum) {
//   console.log("for højt");
//   return lownum + (highnum - lownum) / 2;
//   highnum = computerGuess;
//   computerGuess();
// }

// forl();

// function forl(lownum, highnum) {
//   console.log("for lavt");
//   return lownum + (highnum - lownum) / 2;
//   lownum = computerGuess;
//   computerGuess();
// }
