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

// function maltiplay(number){
//    return number*2
// };
// console.log(maltiplay(6));
//this function is use for maltiplay.

// function countDown(n){
//     console.log(n);
//     n--
//     if(n > 0){
//       countDown(n);
//     };
//     }

//     countDown(6);

//this is a biend function
// function priceOf(contety, price) {
//   let total = price * contety;
//   console.log(total);
// }

// const biendPrice = priceOf.bind(null,10);
// biendPrice(2);

//recarcive function.
// function mynumber(number){
//     if(number === 0){
//         return;
//     }
//     console.log(`your number is ${number}`)
//     mynumber(number -1);
// }
// mynumber(10);

// space removing function and word count.

// function RemovingSpaceAndWordCount(word){
//     let count=0;
//     for(let i=0; i< word.length; i++){
//         if(word[i]==" " && word[i-1] !==" "){
//             count++;
//         }
//     }
//     count++;
//     return count;
// }
// let result = RemovingSpaceAndWordCount("thank you so much. i am a honest opinion you are a brilliant");
// console.log(result);

// const HouseRent = function(rent, advance){
//     this.rent = rent;
//     this. advace = advance;
    
// }
// HouseRent.prototype.inrece = function(){
//     return this.rent += 600;
//      }

// const newRent = new HouseRent(2000, 5000);
// console.log(newRent.inrece());

//rest operator use case below;

// function Added(...data){
// let result = 0;
// for(const number of data){
//     result += number;  
// }
// return result;
// }
// const point = [1,2,34,5,6,7,8]
// console.log(Added(...point));

// replace method will take are two paramaters.
// let textMassage = "this is the main parpas of Life is the success the future";
// const changeWord = textMassage.replace(/Life/gi,(similar) => similar.toLowerCase());
// console.log(changeWord);
//function decledeceleration call before the function deceleration or inshilaigation. 
// console.log(MakeIcecrim('vanilla','chocklet'));
// function MakeIcecrim(flavar1, flavar2){
//     let ice = `It is your  ${flavar1} and ${flavar2} icecrim.`
//     return ice;
// }

// let MakeIcecrimMashin = function(flavar1, flavar2){
//     let ice = `It is your  ${flavar1} and ${flavar2} icecrim.`
//     return ice;
// }
// let ice3 = MakeIcecrimMashin("nut","lisi");
// console.log(ice3);

// 

// rest and spread operator exampel.
// function added(text, ...rest){
//   console.log(text);
//  let sum = rest.reduce((accu, carrentvalu)=>{
//     return accu + carrentvalu
//   }, 0)
//   console.log(sum);
// }

// added('the all sum result is :', 2,3,4,5,67);


// let setTimeoutId = setTimeout(()=>{
//     console.log('thank you Ruhul');
// },1000);
// console.log('hello world');
// ;
// clearTimeout(setTimeoutId);
// const roadmapWrapper = document.querySelector('.roadmap-wrapper');
// const dimensions = roadmapWrapper.getBoundingClientRect();

// console.log(dimensions); 

// function add(n){
//     return n +2;
// }

// console.log(add(5));


//curring function.
// function maltiplay(a){
//     return function (b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }

// let maltiplayByFive = maltiplay(5); // parshil function.
// let maltiplayByFiveAndTwo = maltiplayByFive(2);
// let result = maltiplayByFiveAndTwo(4);
// console.log(result)

// const myFunction = () => {
//     setTimeout(()=>{
//         console.log('thank you ruhul')
//     },1000);
// }
// myFunction()


function x(){
    for(var i=1; i<= 5; i++){
        function close(x){   // every time it will be a get new i .
            setTimeout (function (){
                console.log(x);
            },x * 1000) 
        }
        close(i);
    }
    console.log('Thank you ruhul');
}

x()