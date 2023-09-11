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
function myName(name = 'Ruhul'){
   if (!name) {
       console.log('please inter the name');
       return
    }
    return `${name} is a good programar in the world.`
}
console.log(myName());