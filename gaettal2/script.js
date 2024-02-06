"use strict";
// sæt en værdi for det højeste og laveste tal, computeren skal gætte imellem

let lownum = 0;
let highnum = 100;

// Brug let i stedet for const - Da det er en variabel som ændre sig
let computerGuess;

let computerGuessText = document.querySelector("h1");
let numberOfGuesses = 0;
//document.querySelector(".forhoejt").addEventListener("click", forh);
//document.querySelector(".forlavt").addEventListener("click", forl);
document.querySelector("#forhoejt").addEventListener("click", tooLowOrHigh);
document.querySelector("#forlavt").addEventListener("click", tooLowOrHigh);

computerGuesses();
function computerGuesses() {
  numberOfGuesses++;
  computerGuess = Math.round(lownum + (highnum - lownum) / 2);
  computerGuessText.textContent = `jeg gætter på ${computerGuess}`;
}

function tooLowOrHigh(evt) {
  console.log(evt.target.id);
  if (evt.target.id === "toolo") {
    lownum = computerGuess;
  } else {
    highnum = computerGuess;
  }
  computerGuesses();
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
