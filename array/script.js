"use strict";
//let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

//console.log("letters[4]", letters[4]);
//console.log("letters[7]", letters[7]);

//console.log("sidste letter", letters[letters.lenght - 1]);

//let newarr = letters;
//newarr[4] = "*";
//console.log(letters[4]);

// const people = ["Harry", "Ron", "Hermione"];
// let result;

/* result = people.push("Draco");
console.log("result", result);
console.log("people", people);
console.log("***************");

result = people.pop();
result = people.push("Neville");
result = people.push("Luna");
result = people.slice(0, 3);
result = people.splice(1, 0, "Cho");
people[1] = "Ginny";
people.push("Fred", "George");

result = people.indexOf("Draco"); */
//result = people.splice(result, 1);

//const letters = Array.from("abcdefgh");
//console.log(letters);

const str = "jeg er mig";
const arr1 = str.split();
console.log(str, arr1);

const arr2 = Array.from(str);
console.log(str, arr2);

const arr3 = [...str];
console.log(str, arr3);
