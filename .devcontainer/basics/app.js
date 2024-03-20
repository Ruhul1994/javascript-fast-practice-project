//wrong code.
// import { createInterface } from 'readline';
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl.question("please inter your name :" , (name)=>{
//     console.log(`you inter the name ${name}`)
//     rl.close();
// })
//wright code.
// input the name Name:

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
    console.log(`You entered the name ${name}`);
    rl.close();
});

rl.on("close", ()=>{
    console.log('the interface is close');
    process.exit(0);
});

