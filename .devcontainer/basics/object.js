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

console.log(Math.PI)
const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discriptor);

newobject = {
    name:'ruhul',
    age:31
}
console.log(Object.getOwnPropertyDescriptor(newobject,'name'));
Object.defineProperty(newobject, 'name', {
    writable:false, enumerable:false
});
console.log(Object.getOwnPropertyDescriptor(newobject,'name'));
