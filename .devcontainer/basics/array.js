let myArray = [1,2,3,4];
let myNextArray = [8,9,12,13];
// let myNewArray = myArray.concat(myNextArray);
let myNewArray = [...myArray,...myNextArray];
console.log(`my new array = ${myNewArray}`);