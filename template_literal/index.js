"use strict";
const firstName = "Peter";
const name = "Mandu";
const type = "cat";
const len = name.length;

console.log(`My name is ${firstName}.\nI have a ${type} called ${name}`);
document.querySelector("p").textContent = `My name is ${firstName}.\nI have a ${type} called ${name}`;
console.log(`${name} is ${len} characters long`);

const letter = name[0];
console.log(`the first letter of ${name} is ${letter}`);
const dumbledore = "Albus Percival Wulfric Brian Dumbledore";

const dumlen = dumbledore.length;
console.log(dumlen);

const indeks2 = dumbledore[6];
console.log(indeks2);

console.log(dumbledore.indexOf("D"));
console.log(dumbledore.lastIndexOf("e"));

const fullName = "Klaus Mandal";
const firname = fullName.substring(0, 5);
console.log("Klaus_");

const name = "Albus Percival Wulfric Brian Dumbledore";

const firstName = name.substring(2, 5);
// 5 = Albus
// 29 = Dumbledore

console.log(firstName);

console.log(name.indexOf("W"));
// 15, 22 = Wulfic
// 14 ,22 = Wulfic

// 15, 28 = ian
// 2,5 = bus
