//Example of padEnd / and padStart method;
let text1 = "goood morning sir";
// let text1Lenth = text1.length;
// console.log(text1Lenth);
// let result = text1.padEnd(16);
// console.log(result);

// let text = "Hello";
// let paddedText = text.padEnd(18,'.'); // Pad with spaces to make the total length 10
// console.log(paddedText); // Output: "     Hello"

// let text1Split = text1.split("i",2);
// console.log(text1Split)
// console.log(text1Split.length);

//Example of localeCompare method.
// let b= 'ghi';
// let d='def';
// let copare = b.localeCompare(d);
// console.log(copare);

//Example of search method
let someText = 'this is the main Plan in my life but it is not working';
// let searchResult = someText.search(/i/i);
// console.log(searchResult);

// let ismatch = someText.match(/is/g);
// console.log(ismatch);

let para = 'this is time to go outside';
//this is includes method 
// console.log(para.includes('is'));
//this is concat method
let para2 = 'I am not codding practice now';
// console.log(para.concat(" and " ,para2));

//start with use for check this word is fast word or not, if it is fast word then it will give me true. 
// when you count the number alowes start 0
//the start with check the 5 no indesx is star is not . it is true then it will return in console true.
//console.log(para2.startsWith('not',5));


//  primative vs refference.

// let a = 6;
// let b = 3;
// console.log("1",b)
// b = a
// console.log("2",b);
// a = 9;
// console.log("3",b);
// b = a
// console.log("4",b);
// Refferance type valu all thime change the root of momory alocate place.
// let a =[1,2,3]
// let b = a;
// console.log("1",b);
// a.push(8);
// console.log("2",b);
// reverch string.
let demoString = 'Ruhulkuddus';
// function reverchString(str){
// let reverchst ='';   
// for(let i = str.length -1; i >=0 ; i--){
//     reverchst += str[i];
// }
// return reverchst;
// }
// console.log( reverchString(demoString));

    // function reverse(str) {
    //     let reversed = ''
        
    //     for(let char of str){
    //         reversed = char + reversed
    // }
        
    // return reversed 
    // }

    // console.log( reverse(demoString));

    // function revurch(str){
    //     let strrev =''
    //    for(let i =0; i < str.length; i++){
    //     strrev =  str[i] + strrev ; // it will added the string last to fast.
    //    }
    //    return strrev;
    // }

    // console.log(revurch('demoString'));

 //the easy way to problem solve.

//  function reverseStr(str){
//     return str.split('').reverse().join('');
//  }

//  console.log(reverseStr('shakil'));

// solve the problem for of loops.
// function reverseStr(str){
//         let reverseStr =''
//         for(let string of str){
//             reverseStr = string + reverseStr;
//         }
//         return reverseStr;
//       }
    
//      console.log(reverseStr('monika'));

// reverse the  number;

function reverseNumber(n){
    let reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n)
};

console.log( reverseNumber(41));