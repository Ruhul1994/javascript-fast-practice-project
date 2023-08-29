// let myArray = [1,2,3,4];
// let myNextArray = [8,9,12,13];
// // let myNewArray = myArray.concat(myNextArray);
// let myNewArray = [...myArray,...myNextArray];
// console.log(`my new array = ${myNewArray}`);
const anatherArray = [1,2,3,4,[5,6,7],[8,9,[10,11,12],13,14]];

 console.log(Array.isArray('ruhul'));
 
const myRealArray = anatherArray.flat(Infinity);
// node .devcontainer/basics/array.js

console.log(myRealArray);

console.log(Array.from("Ruhul"));
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
