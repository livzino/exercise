"use script";

const first = "peter";

//let result = first.charAt(1).toUpperCase() + first.slice();

let result = first.substring(0, 2).toLowerCase(0, 2) + first.substring(2, 3).toUpperCase(2, 3) + first.substring(3, 5).toLowerCase(3, 5);

console.log(result);

let resultt = first.substring(0, 1).toLowerCase(0, 1) + first.substring(1, 3).toUpperCase(1, 3) + first.substring(3, 5).toLowerCase(3, 5);

console.log(resultt);

let resulttt = first.substring(0, 2).toUpperCase(0, 2) + first.substring(2, 5).toLowerCase(2, 5);

console.log(resulttt);

let resultttt = first.substring(0, 4).toLowerCase(0, 4) + first.substring(4, 5).toUpperCase(4, 5);

console.log(resultttt);

let resullt = first.substring(0, 2).toUpperCase(0, 2) + first.substring(2, 3).toLowerCase(2, 3) + first.substring(3, 5).toUpperCase(3, 5);

console.log(resullt);
