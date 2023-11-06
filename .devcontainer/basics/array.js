// let myArray = [1,2,3,4];
// let myNextArray = [8,9,12,13];
// // let myNewArray = myArray.concat(myNextArray);
// let myNewArray = [...myArray,...myNextArray];
// console.log(`my new array = ${myNewArray}`);
// const anatherArray = [1,2,3,4,[5,6,7],[8,9,[10,11,12],13,14]];

//  console.log(Array.isArray('ruhul'));
 
// const myRealArray = anatherArray.flat(Infinity);
// // node .devcontainer/basics/array.js

// console.log(myRealArray);

// console.log(Array.from("Ruhul"));
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// let score4 =500;

// console.log(Array.of(score1,score2,score3));

// const myArray = [2,3,4,5,6,7,8,9];
// let sum = 0;
// myArray.forEach((v,i)=>{
// if(i <= 3){
//  sum += v;
// }

// })
// console.log(sum);
// const students = ['Atik','Brosha','Taniya','Akash',['Rubel','Toma'],['Rahul',['Mina,Razu'],'Nandini'],['Mni','jara']];

// function studentCount () {
//     for(let i = 0; i< students.length; i++) {
//         let studentIndex = students[i];
//         console.log(studentIndex);
//         for (let j =i; j<students.length; j++){
//             let studentIndexNested = studentIndex[j];
//             console.log(studentIndexNested);
//         }
//     }
    
   
// }
// console.log(studentCount());


// const myScroe = [1,3,4,5,6,7];
// const  points = new Array(12,3,4,6,7,8,8);
// const score1 = new Array (5);
// console.log(points);
// console.log(score1);
// const score2 = [6];
// console.log(score2);
// let fruits = ['mango','banana','Apple','pinapple','gova'];
// let type = typeof(fruits);
// let check = Array.isArray(fruits);
// console.log(check);

// let score3 = fruits instanceof Array;
// let size = fruits.length;
// console.log(score3);
// console.log(size);
// let getString = fruits.toString();
// console.log(getString);

// 
// const myArray = [[1,2],[3,4],[5,6],[7,8]];
// const myNewArray = myArray.flat();
// console.log(myNewArray);
// 
//you have a array can you fiend a max number in array imperative approach.

//const points = [4,5,2,7,9,1,8,16,65,13,3,6,10,12,11,15,122];
// const rightpoint = points.sort((a,b)=> b-a);
// console.log(rightpoint);

// function findMax(array){
//     if(array.length === 0){
//         return undefined; // for empty array.
//     }
//     let max =0;
//     for (i=1; i<array.length; i++){
//         if(array[i] > max){
//           max = array[i]; // updet the max if found the largest number in array.     
//         }
//     }
//     return max;
// }

// console.log(findMax(points));

//const Numbers = [12,65,100,25,42,74,87,13,60,10];
// console.log(Numbers.sort()); // wrong approch.
// console.log(Numbers.sort((a,b)=> b - a));
// const txt = 'Number: ';
// Numbers.forEach(myFunction);
// function myFunction (val){ 
// console.log( txt + val );
// }

// console.log (myFunction());
// console.log(Numbers.length);

// const points = [1,2,3,4,5,6,7];
// const result = points.reduce((acc,current) =>{
//   acc += current;
//   console.log (acc);
//     return acc;
// },0);

// console.log(result);

// const arry =[1,2,4,5,6,7,8,9,12];
// // function squreItem(item){
// //   return item * item
// // }

// const newarry = arry.map(item => item + item);
// console.log(newarry);

// let fruts = [ 'apple','mango','orenge','jam'];
// console.log(fruts.indexOf('orenge',3));
// dir work in wanly browsarl
// let myArray = new Array()
// myArray.push('ruhul', 'nahid');
// console.dir(Array.prototype);