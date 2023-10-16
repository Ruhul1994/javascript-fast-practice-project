// Problem 8: Remove Duplicates
// Write a function that removes duplicate elements from an array and returns a new array without duplicates.
//console.time('analog')
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
// console.time('filtermethod');
// const myArray =[1,1,2,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,8,9,9,9,9,9,12,12];

// function RemoveDuplicate(arr) {
//     const newArray = arr.filter((value, index) => {
//         return arr.indexOf(value) === index;
//     });
//     return newArray;
// }
// console.log(RemoveDuplicate(myArray));
// console.timeEnd('filtermethod')
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

// **Problem 7: Fibonacci Series**
// Write a function to generate the nth Fibonacci number.
//  The Fibonacci sequence is defined as    
// follows: the 0th number is 0, the 1st number is 1, and from the 2nd number onward,
//  it's the sum of the previous two numbers
//  (e.g., 0, 1, 1, 2, 3, 5, 8, 13, ...).

// function fibonacci(n){
// if(n === 0){
//     return 0;
// } else if (n === 1){
//     return 1;
// }
// return fibonacci(n-1) + fibonacci(n-2);
// };
// console.log(fibonacci(2));

// function fibonacci(n) {
//     if (n === 0) {
//         return 0; // Base case: F(0) = 0
//     } else if (n === 1) {
//         return 1; // Base case: F(1) = 1
//     }
//     // Recursive step: F(n) = F(n-1) + F(n-2)
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(4));

function fibonakiWithloop(n){
    if(n === 0){
    return 0; 
    }else if(n === 1){
        return 1;
    }
    let prev = 0;
    let carrentv = 1;
    let result = "" ;

    for(let i = 2; i<=n; i++){
        result = prev + carrentv;
        prev = carrentv;
        carrentv = result;
       
    }
    return result
}
//console.log(fibonakiWithloop(5));

function seeFibonaki(n){
    for(let i=0; i<=n; i++){
        console.log(`${i} this Fibonaki number is: ${fibonakiWithloop(i)}`);
    }
}
seeFibonaki(20)
