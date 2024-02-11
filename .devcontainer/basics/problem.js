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

// function FizzBuzz(){
//     for(let i=1; i<=100; i++ ){
//    if(i % 3 ==0 && i % 5 ==0){
//       console.log('FizzBuzz');
//    }else if(i % 3 == 0){
//       console.log('Fizz');
//    }else if (i % 5 ==0){
//       console.log('Buzz');
//    }else{
//       console.log(i);
//    }
// }
// }
// FizzBuzz();

// function fizzBuzz() {
//    let array = []
//[note start will be 1]
//    for (let i = 1; i <= 100; i++) {
//      if (i % 3 === 0 && i % 5 === 0) {
//        array.push('FizzBuzz');
//      } else if (i % 3 === 0) {
//        array.push('Fizz');
//      } else if (i % 5 === 0) {
//        array.push('Buzz');
//      } else {
//        array.push(i);
//      }
//    }
//    return array;
//  }
 
//  console.log(fizzBuzz());
 
// Problem 1: Palindrome Checker
// Write a function that takes a string as input and returns true if it's a palindrome (reads the same backward as forward), and false otherwise.

// function ispalindrome(inputString){
// const clinString = inputString.replace(/[^A-Za-z1-9@#$]/g,'').toLowerCase();
// let leftPointer = 0;
// let rightPointer = clinString.length -1;
// while(leftPointer < rightPointer){
//    if(clinString[leftPointer] !== clinString[rightPointer]){
//       return false
//    }
//    leftPointer ++;
//    rightPointer --;
// }
// return true;
// }

// console.log(ispalindrome('racecar'));

// //when use the  class negates "^" then you replace the all,without your bracket carectat. 
// let text = 'my name is ruhul i have a friend';
// const cleartext = text.replace(/[^have]/gi,'@');
// console.log(cleartext)

// Problem 1: Anagram Checker
// Write a function that takes two strings as input and determines if they are anagrams of each other.
//  Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.


// function areAnagram(string1,string2){
//    // Replace the space and convert to lowercase.
//    const cleanString1 = string1.replace(/\s/g,'').toLowerCase();
//    const cleanString2 = string2.replace(/\s/g,'').toLowerCase();

//    if(cleanString1.length !== cleanString2.length){
//       return false;
//    }
// //Note = ['if you not use the cotetion in join method then it added the coma']
//    const sortString1 = cleanString1.split('').sort().join('');
//    const sortString2 = cleanString2.split('').sort().join('');

//    return sortString1 === sortString2;


// }
// const string1= "Listen";
// const string2="Silent";

// if (areAnagram(string1,string2)){
//    console.log(`'${string1}' and ${string2} are Anagram `)
// }else{
//    console.log(`${string1} and ${string2} are not Anagram.`)
// }

// Problem 2: Sum of Array Elements
// Write a function that calculates the sum of all elements in an array of numbers.

// console.time('the imparetive way')
// const myarry = [1,2,3];

// function addArry(arr){
//    let sum = 0;
//    for(let i=0; i<arr.length; i++){
//       sum += arr[i];
//    }
//    return console.log(`the total sum is ${sum}`)
// }
// addArry(myarry);
// console.timeEnd('the imparetive way')

// function addArry(arr){
//   return arr.reduce((accu,carentvalue) =>{
//    return accu + carentvalue;
//    },0)
   
// }

// const myArray = [1,2,3];
// const result = addArry(myArray);
// console.log(`the total tesult is ${result}`)

// function toTitleCase(sentence){
// let words = sentence.toLowerCase().split(' ');

// for(let i=0; i<words.length; i++){
//   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// return words.join(' ');
// }
// let inputSentense = 'hellow How Are you mina and razu';
// let TitleCase = console.log(toTitleCase(inputSentense));


// **Problem 4: Find Missing Number**
// You are given an array containing n distinct numbers taken from 0, 1, 2, ..., n.
//  Write a function to find the one number that is missing from the array.

// function findMissingNumber(array){
// const n = array.length + 1;
// const expectSum = (n * ( n + 1 ))/2;
// let curentSum =0;
// for(let i=0; i<= n; i++){
//   curentSum += array[i -1]
// }
// const mussingNumber = expectSum - curentSum;
// return mussingNumber
// }

// const numbers = [1,2,3,5,6,7];
// const mussingNum = findMissingNumber(numbers);
// console.log(mussingNum);

// function findMissingNumber(array){
//   const n = array.length;
//   const expectSum = ((n+1)* ((n+1) + 1)) / 2;
//   let currentSum = 0;
//   for(let i = 0; i <n; i++){
//     currentSum += array[i];
//     console.log(currentSum);
//   }
//   const missingNumber = expectSum - currentSum;
//   return missingNumber;
// }

// const numbers = [1, 2, 3, 5, 6];
// const missingNum = findMissingNumber(numbers);
// console.log(missingNum);


// the optimise code is hear.

// function findMissingNumber(array){
//   const n = array.length + 1;
//   const aspectSum = (n * (n +1))/2;
//   const currentSum = array.reduce((sum,num)=> sum+num,0);
//   const missingNumber = aspectSum - currentSum;
//   return missingNumber
// }

// const numers =[1,2,3,4,6,7];
// const missingNum = findMissingNumber(numers);
// console.log(`your missing number is: ${missingNum}`);


//  **Problem 5: Chunk Array**
//Write a function that divides an array into smaller arrays of a specified size.

// function chunkArray (inputArray, chunkSize){
//   let resultArray = [];

//   for(let i=0; i < inputArray.length; i += chunkSize){
//     //console.log(`inshial value is = ${i}`)
//     let ichunkSize = i + chunkSize
//     //console.log(`ichunkSize is : ${ichunkSize}`)
//     let chunk = inputArray.slice(i, ichunkSize);
//    // console.log(chunk); 
//     resultArray.push(chunk)
//   }
//   return resultArray;
// }

// const myArray = [1,2,3,4,5,6,7,8,9,10,11];
// const FinalArray = chunkArray (myArray, 2);
// console.log(FinalArray);  

//[1,2,3,4,5]
//[[1,2],[3,4]]

// function chunkArrayFunction(array,arraySize){

//   let resultArray =[]
//  let index =0;
//  while(index<array.length){
// resultArray.push(array.slice(index, index + arraySize))
// index += arraySize
//  }
//  return resultArray;
// }

// const myArray = [1,2,3,4,5,6,7,8,9,10,11];
// const FinalArray = chunkArrayFunction(myArray, 2);
// console.log(FinalArray);

// Problem 6: Caesar Cipher
// Write a function that takes a string and a number (the shift value) as input and performs a Caesar Cipher shift on the letters of the string.
//  For example, with a shift of 1, 'A' would be replaced by 'B', 'B' would become 'C', and so on.
//wrong solution.
// function caesarCipher(text,shiftNum) {
//   const alfabate = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';
//     for(let i= 0; i<text.length; i++){
//     let char = text.toUpperCase();

//     if(alfabate.indexOf(char) === -1){
//       result += char[i]
//     }else {
//       let shiftIndex = (alfabate.indexOf(char) + shiftNum)%26
//       if(shiftIndex <0){
//         shiftIndex += 26
//       }

//       if(text[i].toUpperCase === text[i]){
//          result += alfabate[shiftIndex];
//       }else{
//         result += alfabate[shiftIndex].toLowerCase();
//       }

//   }
// } 
// return result; 
//  }

//  const inputText = 'i love Bangladesh';
// const cipherText =  caesarCipher(inputText,2);
// console.log(cipherText);

// solution2;

// function caesarCipher(text,shift){
//   const alfabate = 'abcdefghijklmnopqrstuvwxyz';
//   let result ='';
// for(let i=0; i<text.length; i++){
//   let char = text[i]
//   if(alfabate.includes(char.toLowerCase())){
//     const isUpperCase = char === char.toUpperCase();
//     char = char.toLowerCase();
//     const charIndex = alfabate.indexOf(char);
//     const shiftIndex = (charIndex + shift)%26;
//     const shiftChar = alfabate[shiftIndex];

//     result += isUpperCase ? shiftChar.toUpperCase() : shiftChar;
//   }else{
//     result += char;
//   }
// }
// return result;

// }
// const inputText = 'i love MYSelf!!';
// const cipherText =  caesarCipher(inputText,2);
// console.log(cipherText);

//this is the before position of cipherText.

// function caesarCipher(text,shift){
//   const alfabate = 'abcdefghijklmnopqrstuvwxyz';
//   let result ='';
// for(let i=0; i<text.length; i++){
//   let char = text[i]
//   if(alfabate.includes(char.toLowerCase())){
//     const isUpperCase = char === char.toUpperCase();
//     char = char.toLowerCase();
//     const charIndex = alfabate.indexOf(char);
//     const shiftIndex = (charIndex - shift + 26)%26;
//     const shiftChar = alfabate[shiftIndex];

//     result += isUpperCase ? shiftChar.toUpperCase() : shiftChar;
//   }else{
//     result += char;
//   }
// }
// return result;

// }
// const inputText = 'k nqxg OAUgnh!!';
// const cipherText =  caesarCipher(inputText,2);
// console.log(cipherText);

// Problem 7: Validate Email Address
// Write a function that validates an email address. 
// The function should return true if the email address is valid and false otherwise. 
// For simplicity, you can assume that a valid email address has a single "@" symbol and a single "." symbol.

// const isvalidEmail = (email) => {
//     const emailRejex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return  emailRejex.test(email);
// };

// // Example usage:
// let email1 = "example@example.com";
// let email2 = "example@.com";
// let email3 = "@example.com";
// let email4 = "example.com";

// console.log(isvalidEmail(email1));
// Problem 8: Longest Word
// Write a function that finds the longest word in a sentence.
// The function should return the longest word and its length.
// console.time('findsLongestWord')
// function findsLongestWord(sentense){
//     // separet the word
//     //  when want word then use the space in cottetion.
//     let word = sentense.split(' ')
//     let longestWord = '';
//     let MaxWordLenth = 0;

//     for(let letter of word){
//         // clean the extra crecter in word.
//         const cleanWord = letter.replace(/[^\w]/g, '');
//         if(cleanWord.length > MaxWordLenth){
//            MaxWordLenth = cleanWord.length; 
//            longestWord  = cleanWord;

//         } 

//     }
//     return {
//         word: longestWord ,
//         length:MaxWordLenth 
//     }
// }

// const text = 'i love my country';
// const result = findsLongestWord(text);
// console.log(`the longest word is "${result.word}" and this length is ${result.length}`);
// console.timeEnd('findsLongestWord')


//prime number chicking.

// function isPrime(n){
//     if(n < 2){
//         return console.log(`${n} is not a prime number.`);
//     }
//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return console.log(`${n} is not a prime number.`);
//         }
//     }
//     return console.log(`${n} is a prime number.`)
// }
// isPrime(2);

// console.time('not recarsive')
// function fiendOddNumber(array){
//     let oddNumber =[];
//     for(let i=0; i<array.length; i++){
//         if(array.length=== 0) return;
//         if(array[i] % 2 !== 0){
//         oddNumber.push(array[i]);
            
//         }
        
//     }
//     return  oddNumber;
// }

// console.log( fiendOddNumber([0,1,2,3,4,5,6,7,8,9]));

// console.timeEnd('not recarsive');

// console.time('recarsive')
// function fiendOddNumber(array){
//     let oddNumber =[];
//     function helper(para){
//     if(para.length === 0) return;
//     if(para[0] % 2 !== 0){
//         oddNumber.push(para[0]);
//     }
//     helper(para.slice(1));
//     }
//     helper(array);
//     return oddNumber;
// }
// console.log( fiendOddNumber([0,1,2,3,4,5,6,7,8,9]));
// console.timeEnd('recarsive');

// function liniarCharch(array,value){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === value){
//             return i
//         }else{
//             -1
//         }
//     }
// }

// console.log(liniarCharch([1,2,3,4,3,5,6,7,8,9,14],14))

function bainarCharch(array,value){
    let start = 0;
    let end = array.length -1;
    while(start <= end){
        let middle = Math.round((start + end)/2);
        if(array[middle] === value){
            return middle;
        } else if(array[middle] < value){
            start = middle + 1
        }else{
            end = middle - 1;
        }
    }
 return -1;
}

console.log(bainarCharch([1,2,3,4,6,7,8,9,10,11,12,34,45], 19))