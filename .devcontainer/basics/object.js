// const myObject = {
//     name:'Ruhul',
//     gmail:'ruhulkuddus@gmail.com',
//     number:'01722126426',
// }
// // console.log(myObject.number);

// const object1={
// a:'1',
// b:'2',
// c:'3'
// }
// const object2 = {
//     a:'4',
//     b:'5',
//     c:'6'
// }
// object3 = {...object2, ...object1 };
// console.log(object3);
// const teacher = {
//     "name":"Tomas",
//     "subject":"Math",
//     "class":"ten",
//     "school":"secendary"
// }
// 
// function makeUser(name,age){
//     return {
//         name,
//         age,
//     }
// }
//     let user = {name:'Ruhul', age:31};
//     console.log(user.name);
//     console.log(user.age);

// 

// const point = {
//     point1:200,
//     point2:200,
//     point3:300,
//     point4:400,
//     point5: 'Golden'
// }
// // let sum = 0;
// // for(let key in point){
// //      sum += point[key];
// // }
// // console.log(sum);

// // 

// const myObject = {
//     // name:'Ruhul',
// };
// if(Object.keys(myObject).length === 0 ){
//     console.log('your object is empty');
// } else {
//     console.log('your object is not impty');
// }

// const students = {
//    1 : {
//     name: 'zahid',
//     mail: 'zahid@gmail.com',
//     },
//    2 : {
//     name: 'Frhan',
//     mail: 'Farhan@gmail.com',
//     },
//    3 : {
//     name: 'Farhan',
//     mail: 'Farhan@gmail.com',
//     },
//    4 : {
//     name: 'Mostafiz',
//     mail: 'Mostafiz@gmail.com',
//     },
// }

// Object.values(students).forEach((student)=>{
//     if (student.name == 'Mostafiz'){
//         student.name = 'sakib';
//     }
//     console.log(student.name, student.mail);
// });

// function doSome (num = 10){
//     const number = 23;
//     const result = num + number;
//     return result;

// }
// console.log(doSome());

// const student = {
//     name: 'Ruhul',
//     age:31,
//     work:'webdeveloper',
//     anotherObj : {
//         name:'Kuddus',
//         age:30,
//         value: function(){
//             console.log(`my name is : ${this.name}`)
//         }
//     }
// }
// console.log(student.anotherObj.value());

// 

// const nahid ={
//     name:'nahid',
//     dob:2000,
//     age: function(carentyear,msg){
//         console.log(`${msg}, ${this.name} is ${carentyear-this.dob} years old`);
//     }
// }
// const Ruhul ={
//     name:'Kuddus',
//     dob:1993
// }

// const Ruhulage = nahid.age.bind(Ruhul);
// console.log(Ruhulage(2023,'He is good boy'));

// const myObject = {
//     Bangladesh : 'Dhaka',
//     USA : 'wosihinton dc',
//     India : 'Dillih',
//     japan : 'tokiyo'
// }
// const capital = Object.keys(myObject);
// console.log(capital);

// const capi = capital.map(key =>{
//     console.log(`contry name is: ${key}`)
// })

// for ( country in myObject){
//     console.log(`your country is: ${country}`)
// };

// function User(name,id,isAdmin){
//     this.name = name,
//     this.id = id,
//     this.isAdmin = isAdmin
// }

// const user1 = new User('Shafin',1234,false);
// const user2 = new User('Ruhul',232323,true);
// console.log(user1);
// console.log(user2);


// const myArry = ['Foodpanda','patau'];
// const myobject = {
//     name: 'ruhul',
//     age:31,

// }
// Object.prototype.ruhul = function(){
//     console.log(`this function is acces is oll over the object`);
// }
// myobject.ruhul()

// console.log(Math.PI)
// const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(discriptor);

// newobject = {
//     name:'ruhul',
//     age:31
// }
// console.log(Object.getOwnPropertyDescriptor(newobject,'name'));
// Object.defineProperty(newobject, 'name', {
//     writable:false, enumerable:false
// });
// console.log(Object.getOwnPropertyDescriptor(newobject,'name'));


// let myObject={
//     name:"atik",
//     rol:32,
//     class:"two",
// }

// const student = {...myObject};
// console.log(myObject);
// myObject["school"] = "abc school";
// console.log(myObject);

// let fastname = 'shimana';
// let roll= 32;

// const girl={
//     Harname : fastname,
//     Harroll : roll
// }

// console.log(girl);


// const student = [
//     {name:"Rakib",Roll:1,class:4},
//     {name:"miana",Roll:2,class:4},
//     {name:"kari",Roll:4,class:4},
//     {name:"natasha",Roll:6,class:4},
//     {name:"muna",Roll:100,class:4},
//     {name:"mitu",Roll:8,class:4},
//     {name:"Rabbi",Roll:9,class:4},
//     {name:"Rina",Roll:10,class:4},
// ];

// function fiendRoll(Roll){
//     return student.find(studentDetails => studentDetails.Roll === Roll)
// }

// const hisRoll = fiendRoll(4);
// console.log(hisRoll);

// const item = new Map([
//     [1,"mina"],
//     [2,"shima"],
//     [4,'tanima'],
//     [5,'Rukaya'],
//     [6,'natsha']
// ]);

// item.set(7,'toma')
// console.log(item);


// let fastboy = 'mijan';
// let Monitor = 'pinki';

// const classTen = {
//     fastboy:"Nehal",
//     Monitor:'Atika',
//     OldStudent:['Akash','mitu','Raju','piriya'],
//     lastBoy:"Mrinal",
//     teacher: {
//         Bangla:'Bikash sir',
//         English:'Manik sir'
//     },
//     HomeWork: function reading({Bangla,English}){
//         console.log(Bangla);
//         console.log(English);
//         }
// }

// //  ({fastboy, Monitor} = classTen);
// // const {sclorship:speshalChild = 'mariya'}= classTen;
// // const{OldStudent:fail=[]} = classTen;
// // console.log(fastboy, lastBoy);
// // console.log(fastboy,Monitor);
// ({ fastboy: myFastboy, Monitor: myMonitor } = classTen);
// console.log(myFastboy, myMonitor);
let myFastboy = 'mijan';
let myMonitor = 'pinki';

let classTen = {
    fastboy: "Nehal",
    Monitor: 'Atika',
    OldStudent: ['Akash', 'mitu', 'Raju', 'piriya'],
    lastBoy: "Mrinal",
    teacher: {
        Bangla: 'Bikash sir',
        English: 'Manik sir'
    },
    HomeWork: function reading({ Bangla, English }) {
        console.log(Bangla);
        console.log(English);
    }
}

// Destructuring assignment with different variable names
({ fastboy: myFastboy, Monitor: myMonitor } = classTen);
console.log(myFastboy, myMonitor);
