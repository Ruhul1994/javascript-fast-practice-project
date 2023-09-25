
// while (true) {
//   let num = Math.ceil(Math.random() * 100);
//   console.log("Ruhul", num);
//   if (num == 99) break;
// }

// do{
//   console.log('Hello world this is the  last print')
// } while(false)

// const rpt = `I want to say   ${' I love Allah +' . repeat(5) } waleys `;
// console.log(rpt);
const elements = ['A', 'B', 'C', 'D'];

for (let i = 0; i < elements.length; i++) {
  for (let j = i + 1; j < elements.length; j++) {
    console.log(elements[i] + elements[j]);
  }
}
