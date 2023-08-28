// let myArray = [1,2,3,4];
// let myNextArray = [8,9,12,13];
// // let myNewArray = myArray.concat(myNextArray);
// let myNewArray = [...myArray,...myNextArray];
// console.log(`my new array = ${myNewArray}`);
const anatherArray = [1,2,3,4,[5,6,7],[8,9,[10,11,12],13,14]]
const myRealArray = anatherArray.flat(Infinity);
console.log(myRealArray);