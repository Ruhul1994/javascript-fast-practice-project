// import { createInterface } from 'readline';
// const rl = createInterface({
//     input: Process.stdin,
//     output: Process.stdout,
// });
// rl = rl.question("please inter your name :" , (name)=>{
//     console.log(`you inter the name ${name}`)
//     rl.close();
// })
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    console.log(`You entered the name ${name}`);
    rl.close();
});
