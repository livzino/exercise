"use strict";

let firstName = "Mona";

greeting();

function greeting() {
  return `Hello ${firstName}`;
}

const txt = `Greeting is ${greeting("a name")}`;

const result = greeting("klaus");
console.log(greeting("any name"));

console.log(txt);
