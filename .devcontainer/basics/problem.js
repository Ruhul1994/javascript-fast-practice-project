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

// 

//Problem 6: Count Vowels
//Write a function that takes a string as input and counts the number of vowels in it.

// const inputString = 'k.m.ruhulkuddus';
// const stringArray = Array.from(inputString)

// function countVowel(stringArray){
// let countVowels = 0;
// let vowel = ['a','A','E','e','I','O','o','u','U']

// for(let i =0; i<=stringArray.length; i++){

//  if(vowel.indexOf(stringArray[i]) !== -1){
//     countVowels ++
//  }
// }
// return countVowels;
// }
// const result = countVowel(stringArray);
// console.log(result);
// **Problem 5: Reverse a String**
// Write a function that reverses a string without using the built-in `reverse()` method.

// const string = 'Ruhulkuddus'
// function reverseString(string){
//    let reverseString = [];
   
//    for(let i = string.length -1; i>= 0; i--){
//       reverseString.push(string[i])
//    }
//    let carentString = reverseString.join('');
//    return carentString
// }
// console.log(reverseString(string));

// const string = 'nihid';
// function reverse (string){
//    let reverseString = '';
//    for(let i = string.length -1; i>=0; i--){
//     reverseString += string[i]
//    }
//    return reverseString;
// }
// console.log(reverse(string));

// Problem 4: Find the Largest Element
// Write a function that finds the largest element in an array of numbers.

// const score = [99];

// function fiendMax(arr){
// let maxNumber = [];
// for(let i = 0; i<arr.length; i++){
//    if(maxNumber<arr[i]){
//       maxNumber = arr[i]
//    }
// }
// return maxNumber;
// }

// console.log(fiendMax(score));

// Problem 2: FizzBuzz
// Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
//  For numbers that are multiples of both three and five, print "FizzBuzz".

function FizzBuzz(){
    for(let i=1; i<=100; i++ ){
   if(i % 3 ==0 && i % 5 ==0){
      console.log('FizzBuzz');
   }else if(i % 3 == 0){
      console.log('Fizz');
   }else if (i % 5 ==0){
      console.log('Buzz');
   }else{
      console.log(i);
   }
}
}

FizzBuzz();