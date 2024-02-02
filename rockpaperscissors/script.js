"use strict";
let computerChoice;
getComputerChoice();

let userChoice;
let score;
let ComputerChoice;
//document.querySelector("#player1").classList.add("shake");
//document.querySelector("#player2").classList.add("shake");

document.querySelector(".rock").addEventListener("click", klikRock);
document.querySelector(".paper").addEventListener("click", klikPaper);
document.querySelector(".scissors").addEventListener("click", klikScissors);

function klikRock() {
  userChoice = "rock";
  makeComputerChoice();
  // console.log("ROCK");
}
function klikPaper() {
  userChoice = "paper";
  makeComputerChoice();
  // console.log("PAPER");
}
function klikScissors() {
  userChoice = "scissors";
  makeComputerChoice();
  // console.log("SCISSORS");
}

function makeComputerChoice() {
    console.log("compChoice", userChoice);
    const randoNum = Math.floor(Math.random() * 3);
    if ()
  computerChoice = "rock";
  determineWinner();
}

function determineWinner() {
  result = "win";
}

function startHandtAnimations() {
  document.querySelector("#player1").addEventListener("animationend", handAnimationend);
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
}

function handAnimationEnd() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  console.log("animation ended");
    document.querySelector("#player1").classList.add("paper");
    if (userChoice === "rock") {
        document.querySelector("player1").classList.add("rock")
    }
    else if()
}

function getComputerChoice() {
  console.log("HELLO");
  let rpsChoices = ["rock", "paper", "scissors"];
  computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  console.log("getcomputerChoice", computerChoice);

  //return computerChoice;
}

const paperBtn = document.querySelector(".paper");

paperBtn.addEventListener("click", () => {
  console.log("paper!");

  userChoice = "paper";
  document.querySelector(".player").classList.add("paper");
  getPlayerChoice();
});

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  console.log("rock!");
  userChoice = "rock";
  document.querySelector(".player").classList.add("rock");
  getPlayerChoice();
});

const scissorBtn = document.querySelector(".scissors");
scissorBtn.addEventListener("click", () => {
  console.log("scissorss!");
  userChoice = "scissors";
  document.querySelector(".player").classList.add("scissors");
  getPlayerChoice();
});

function getPlayerChoice() {
  getResult(userChoice, computerChoice);
  console.log("userChoice", userChoice);
  console.log("computerChoice", computerChoice);
  console.log("score", score);
}

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  // All situations where human draws, set score to 0
  if (playerChoice === computerChoice) {
    score = "draw";
    document.querySelector("#draw").classList.remove("hidden");
    document.querySelector("#loose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    score = "win";
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#loose").classList.add("hidden");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    score = "win";
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#loose").classList.add("hidden");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    score = "win";
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#loose").classList.add("hidden");
  }
  // Otherwise human loses (aka set score to -1)
  else {
    score = "lose";
    document.querySelector("#lose").classList.remove("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
  }

  // return score
  // return score;
}
