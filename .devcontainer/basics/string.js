let text1 = "gooodmorningsir";
let text1Lenth = text1.length;
console.log(text1Lenth);
let result = text1.padEnd(16);
console.log(result);

let text = "Hello";
let paddedText = text.padEnd(18,'.'); // Pad with spaces to make the total length 10
console.log(paddedText); // Output: "     Hello"
