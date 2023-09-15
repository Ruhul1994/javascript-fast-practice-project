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
const students = ['Atik','Brosha','Taniya','Akash',['Rubel','Toma'],['Rahul',['Mina,Razu'],'Nandini'],['Mni','jara']];

function studentCount () {
    for(let i = 0; i< students.length; i++) {
        let studentIndex = students[i];
        console.log(studentIndex);
        for (let j =i; j<students.length; j++){
            let studentIndexNested = studentIndex[j];
            console.log(studentIndexNested);
        }
    }
    
   
}
console.log(studentCount());