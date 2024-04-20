//sequence = true
//without sequence = false
const myArray = [1,2,3,4];
const myArray2 = [4,3,2];
const myArray3 = [1,5,7,8,9];
function sequenceCheck(arr){
for(let i=1; i < arr.length; i++){
    if(arr[i] < arr[i-1]){
        return false;
    }
}
return true;
}
console.log(myArray, sequenceCheck(myArray));
console.log(myArray2, sequenceCheck(myArray2));
console.log(myArray3, sequenceCheck(myArray3));


