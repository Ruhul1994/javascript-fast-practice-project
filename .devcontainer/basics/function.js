// function toAdded(x,y){
//     return x + y;
// }
// const toAdded = (x,y) => x + y;

// let result = toAdded(12,10);

// console.log(result);

// // let add = function(a,b){
// //     return a * b;
// // } 
// const add = (a,b) => a * b;
// let myresult = add(4,5);
// console.log(myresult);
// //node .devcontainer/basics/function.js
// let a = Symbol(122);
// let b =122;
// if(a==b){
//     console.log(true);
// }else{
//     console.log(false);
// }
// function myName(name = 'Ruhul'){
//    if (!name) {
//        console.log('please inter the name');
//        return
//     }
//     return `${name} is a good programar in the world.`
// }
// console.log(myName());

// function randomNumber(min = 1, max){
//     const ranNumber = Math.round(Math.random()* min + (max - min));
//     return ranNumber;
// }
// console.log( randomNumber(3,33) );

// function getnumber(...Num){
//    return Num
// }
// console.log(getnumber(200,300));
//IIFE function control the global scope plution.
// (function connect (){
//    console.log('conect DB');
// })();

// (connect => {
//    console.log('connect Bd two');
// })()

 function discribe(name, callback){
    const myage = 31;
    callback(myage);
    console.log(`your name is ${name}`)
 }

 function say(age){
    console.log(`your age is ${age} `);
 }

 console.log(discribe('Ruhul',say));
