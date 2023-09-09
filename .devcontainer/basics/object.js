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
const parson = {
    Name:"Ruhul",
    Age:23
}
const carecter ={
    hoby: "web design",
    city:"khulna"
}
const allBio = { ...parson, ...carecter };
console.log(allBio);