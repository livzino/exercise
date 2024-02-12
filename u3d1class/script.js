"use strict";

const aName = "Peter Heronimous Lind";

const firstName = aName.substring(0, aName.indexOf(" "));
const middleName = aName.substring(aName.indexOf(" ") + 1, aName.lastIndexOf(" "));
const lastName = aName.substring(aName.lastIndexOf(" ") + 1);
console.log("firstName", firstName + "_");
console.log("midlleName", "_" + middleName + "_");
console.log("lastName", "_" + lastName + "_");

 console.log(aName.split(" "));

 const firstNameSplit = aName.split("")[0];
 console.log("firstNameSplit");

const nameArr = aName.split(" ");
const firstNameSplit = nameArr[0];
const lastNameSplit = nameArr[nameArr.length - 1];

console.log("nameArr", nameArr);
console.log("firstNameSplit", firstNameSplit);
console.log("lastNameSplit", lastNameSplit);


