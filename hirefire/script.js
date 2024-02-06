"use strict";

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};
const person4 = {
  firstName: "Ron",
  lastName: "Weassley",
  hired: false,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}
//hire(person3);
//console.log(person3);

fireOrHire(hire, person3);
console.log(person3);
