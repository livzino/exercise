"use strict";

// const people = ["Harry", "Ron", "Hermione", "Neville"];
const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Leelo",
    type: "dog",
  },
  {
    name: "ScoobyDoo",
    type: "dog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

let onlyCats = animals.filter((animal) => animal.type === "cat");
console.log(onlyCats);

let onlyDogs = animals.filter(isDog);
console.log(onlyDogs);

let str = "Hej ";
console.log(str);
str += "Du!";
console.log(str);

// function testParms(a, b, c, d) {
//   console.log(`a: ${a}$, b: ${b}, c: ${c}, d:${d}`);
// }

// people.forEach(testParms);

// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }

// people.forEach(sayHello);
