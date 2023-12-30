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

//  function discribe(name, callback){
//     const myage = 31;
//     callback(myage);
//     console.log(`your name is ${name}`)
//  }

//  function say(age){
//     console.log(`your age is ${age} `);
//  }

//  console.log(discribe('Ruhul',say));

// const myFunction = function toadd (num = 10){
//    const result = num + num ;
//    return result;
// }
//  console.log(myFunction());

// function Student (name,age,roll){
//    this.name = name;
//    this.age = age;
//    this.roll = roll
// } 
// const sumona = new Student ('sumon',21,22);
// console.log(sumona.name);

// function giveRent(yernMony){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          if(yernMony){
//             resolve('pay the rent')
//          } else{
//             reject(new Error('Dont pay the rent'))
//          }
//       },2000)
//    })
// }


// giveRent(false)
// .then((e)=>{
// console.log(e);
// })
// .catch((v)=>{
// console.log(v);
// })
// function sayHello(){
//    setInterval(()=>{
//       console.log('Hello ruhul')
//    },1000)
// };

// function sayTime(){
//    console.log(new Date());
// }
// sayTime()
// function add(...rest){
//    let result = rest.reduce((acc,value) => acc+value)
//    return result
// }
// let result = add(1,2,3,4,5,6,12);
// console.log(result);

// let x = 45
// function y (){
//    x = 25;
//    console.log(`fast: ${x}`);
//    console.log(x);
   

// }
// y();
// console.log(x)


// const added = (a,b) =>{
// var result = a+b;
// return result;
// }

// console.log(added(5,3));

// let myArray =[1,2,3,4];
// let resultArray = [];
// function multiplyArray(array){
//     for(let i=0; i<array.length; i++){
//         resultArray.push(array[i]*2);
//         }
// return resultArray;
// }

// console.log(multiplyArray(myArray));


// let myArray =[1,2,3,4];

// const resultArray = array => array.map(num => num*2);
// console.log(resultArray(myArray));

const workers = [
    {Name:'Sakib', Age: 37},
    {Name:'tamim', Age: 47},
    {Name:'Shoriful', Age: 30},
    {Name:'Mahamud', Age: 34},
    {Name:'Mina', Age: 23},
    {Name:'jibon', Age: 25},
    {Name:'Megna', Age: 29},
]
// you can fiend the theres age is less then 25,

// const cat = function drowCat(howManyTime){
//     for(let i=0; i<howManyTime; i++){
//         console.log('=^.^=');
//     }
// };
// cat(12);

function maltiplay(number){
   return number*2
};
console.log(maltiplay(6));


