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
// for at method for using last method charch,
// const myArray = [
//     {name:'hore', age:12},
//    { name:'mina', age:13},
//    {name:'tina', age:15}, 
//    {name:'Ruhul', age:25},
// ]
// const a = myArray.at(-1);
// console.log(a)

// const mynewArray = [1,2,3,44,5,6];
// const b = mynewArray.at(-2);
// console.log(b)
// must be use parenthisis / fast braket.
// const c = myArray.at(-2);
// console.log(c)

// const c = myArray.fill({name:'nahid',age:45},-1);
//  console.log(c)

//   const k = myArray.at(-2);
//  console.log(k)
// const myArray=["Ruhul,nahid,kamal"]
//  console.log(myArray);

// const myArray =["Rina","Tina","vutu","Nitu"];
// // const[pothom,secend, ,titio]=myArray
// // console.log(titio);

// const c = myArray.fill({name:'nahid',age:45},-1);

//  console.log(c)

let student={
Name:'mina',
roll:22,
class:10,
goodAt:{
    math:60,
    English:65,
    history:70,
    bangal:50, 
}
}

// const {math, English} = student.goodAt;

// function markshit(math, English){
//     return [math + English, math -English ];
// }

// const result = markshit(math,English);
// const[sum, much] = result;
// console.log(sum, much);


// let students = ['mina','tina','muna','suna','Rupali','monali'];
// const [,,,,...rest] = students;
// console.log(rest)

//S will be capital leter hear.

// let myArray =[1,2,3,45,6,3,6,2,3,4,5,9,7,8,8];
// function removeDuplicat (array){
//     let newArray = new Set(array)
//     console.log([...newArray])
// }
// removeDuplicat (myArray);



//sotted array and marged;


// let fatArray = [1,3,5,7,9,11,12,13];
// let secendArray = [2,4,6,8,10];

// function margeArray(arr1,arr2){
// let length= arr1.length + arr2.length;
// let marge =[];
// let j = 0;
// let k = 0;
// for (let i=0; i < length; i++){
//     if(arr1[j] < arr2[k] || arr2 === undefined){
//         marge.push(arr1[j]);
//         j++; 
//      }else{
//          marge.push(arr2[k]);
//          k++;
//      }
// }
// return marge;
// }
// console.log(margeArray(fatArray,secendArray));
// let fatArray = [1, 3,undefined,24 ];
// let secondArray = [2, 4,34];

// function mergeArray(arr1, arr2) {
//     let length = arr1.length + arr2.length;
//     let merge = [];
//     let j = 0;
//     let k = 0;
    
//     for (let i = 0; i < length; i++) {
//         if (k >= arr2.length || arr1[j] < arr2[k]) {
//             merge.push(arr1[j]);
//             j++;
//         } else {
//             merge.push(arr2[k]);
//             k++;
//         }
//     }
    
//     return merge;
// }

// console.log(mergeArray(fatArray, secondArray));

// let fatArray = [1, 3, 5, 7, 9, undefined, 12, 13];
// let secondArray = [2, 4, 6,34, 8, 10];

// function mergeArray(arr1, arr2) {
//     let length = arr1.length + arr2.length;
//     let merge = [];
//     let j = 0;
//     let k = 0;
    
//     for (let i = 0; i < length; i++) {
//         if (j < arr1.length && (k >= arr2.length || arr1[j] < arr2[k])) {
//             merge.push(arr1[j]);
//             j++;
//         } else if (k < arr2.length) {
//             merge.push(arr2[k]);
//             k++;
//         }
//     }
    
//     return merge;
// }

// console.log(mergeArray(fatArray, secondArray));

// let fatArray = [1, 3, 5, 7, 9, undefined, 12, 13];
// let secondArray = [2, 4, 6, 34, 8, 10];

// function mergeArray(arr1, arr2) {
//     let length = arr1.length + arr2.length;
//     let merge = [];
//     let j = 0;
//     let k = 0;
    
//     for (let i = 0; i < length; i++) {
//         if (j < arr1.length && (k >= arr2.length || (arr1[j] !== undefined && (arr2[k] === undefined || arr1[j] < arr2[k])))) {
//             merge.push(arr1[j]);
//             j++;
//         } else if (k < arr2.length && arr2[k] !== undefined) {
//             merge.push(arr2[k]);
//             k++;
//         }
//     }
    
//     return merge;
// }

// console.log(mergeArray(fatArray, secondArray));

// let fatArray = [1, 3, 5, 7, 9, undefined, 12, 13];
// let secondArray = [2, 4, 6, 34, 8, 10];

// function mergeArray(arr1, arr2) {
//     let merge = [];
//     let j = 0;
//     let k = 0;

//     while (j < arr1.length || k < arr2.length) {
//         if (j < arr1.length && (k >= arr2.length || (arr1[j] !== undefined && (arr2[k] === undefined || arr1[j] < arr2[k])))) {
//             merge.push(arr1[j]);
//             j++;
//         } else if (k < arr2.length && arr2[k] !== undefined) {
//             merge.push(arr2[k]);
//             k++;
//         } else {
//             // This block handles the case where arr2[k] is undefined
//             k++;
//         }
//     }

//     return merge;
// }

// console.log(mergeArray(fatArray, secondArray));
// 
//Rest operotor.
 const numberArray = [1,2,200,3,122,4,5,6,7,9];
// let [,,...restOperoter] =numberArray;
// console.log(restOperoter[3]);

// let socore = [66,...numberArray,67,100];
// console.log(socore);

let mobile =[
    {name:"wolton", price:2000, model:'a35'},
    {name:"samsung", price:3000, model:'a26'},
    {name:"motorola", price:4000, model: 'a43'},
    {name:"Apple", price:300, model:'a2600'},

]

function sotingPrice(fast, secend){
    return -1*(fast.price - secend.price);
}

let lowPrice = mobile.sort(sotingPrice);
console.log(lowPrice);