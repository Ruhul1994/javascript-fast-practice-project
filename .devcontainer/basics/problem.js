// Problem 8: Remove Duplicates
// Write a function that removes duplicate elements from an array and returns a new array without duplicates.
console.time('analog')
// const myArray =[1,1,2,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,8,9,9,9,9,9,12,12];
// function RemoveDuplicate(arr){
//     let newArray =[];
// for(let i=0; i<arr.length;i++){
//     if(newArray.indexOf(arr[i]) === -1)  {
//         newArray.push(arr[i]);
//     }
// }
// return newArray;
// }
// console.log(RemoveDuplicate(myArray));
// console.timeEnd('analog')

// function RemoveDuplicate(arr){
//     const newArray = myArray.filter((value,index)=>{
//         return arr.indexOf(value) === index;
//     })
//     return newArray;
// }
// console.log(RemoveDuplicate(myArray));
console.time('filtermethod');
const myArray = [1, 1,13,13, 2, 3, 4, 4, 4, 5, 5, 5, 6,1,5,1, 6, 6, 7, 7, 7, 7, 7, 8, 9,,2, 9, 9, 9, 9,12,12,12];

function RemoveDuplicate(arr) {
    const newArray = arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
    return newArray;
}
console.log(RemoveDuplicate(myArray));
console.timeEnd('filtermethod')
// function RemoveDuplicate(arr){
//     const newarry = arr.reduce((acc,carentvalue)=>{
//         if(acc.indexOf(carentvalue) === -1){
//             acc.push(carentvalue)
//         }
//         return acc;
//     },[])
//     return newarry;
// }
// console.log(RemoveDuplicate(myArray));
