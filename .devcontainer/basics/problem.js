// Problem 8: Remove Duplicates
// Write a function that removes duplicate elements from an array and returns a new array without duplicates.

const myArray =[1,1,2,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,8,9,9,9,9,9];
function RemoveDuplicate(arr){
    let newArray =[];
for(let i=0; i<arr.length;i++){
    if(newArray[i] !== arr[i] ) {
        newArray.push(arr[i]);
    }
}
return newArray;
}
console.log(RemoveDuplicate(myArray));