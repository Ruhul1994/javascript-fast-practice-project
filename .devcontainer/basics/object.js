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

const point = {
    point1:200,
    point2:200,
    point3:300,
    point4:400,
    point5: 'Golden'
}
// let sum = 0;
// for(let key in point){
//      sum += point[key];
// }
// console.log(sum);

function maltiplyNumber(point){
    for(let key in point){
        if(typeof point[key] == 'number'){
            point[key] *= 2;
        }
    }
    return point;
}
console.log(maltiplyNumber(point));