// const object = {
//   firstName: "klaus",
//   age: 59,
//   student: false,
// };

// const nameToGet = "firstName";

// console.log(`${object["firstName"]} is ${object["age"]} `);

//console.log(`${object.firstName} is ${object.age} `);

// let person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };
// // Lastname bliver undefined
// console.log(person1.lastName);

// //lastName bliver Mandal
// person1.lastName = "Mandal";

// console.log(person1);

// //LastName bliver undefined
// person1.lastName = undefined;

// console.log("person1.lastName", person1);

// //Objektet er ikke født med "middlename", så det bliver undefined uden fra objektet.
// console.log("person1.middleName", person1.middleName);

// //Her sletter vi lastName fra objektet.
// delete person1.lastName;
// console.log(person1);

// const person1 = {
//   firstName: "Klaus",
//   age: 59,
//   student: false,
// };

// console.log(person1);

// //Lægger 1 år til age. +=5 vil lægge 5 år til age.
// person1.age++;

// console.log(person1);

// // const person2 = {
// //   firstName: "Bob",
// //   age: 82,
// //   student: true,
// // };

// const person2 = person1;

// person2.firstName = "bob";

// console.log(person1.firstName);

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};
const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};
student1.firstName = student2.firstName;
student1.lastName = student2.lastName;



if (student1 == student2) {
  console.log("they are the same");
} else {
  console.log("they are not");
}

// selvom vi laver 2 ens objekter vil de ikke være det samme selvom de er ens, fordi det er
// to objekter. Hvis man fjerner det ene objekt og bare skriver student2 = student1, vil de være ens.