
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
// const alfabate = ['A','B','C','E','F','G'];
// for(let i = 0; i<alfabate.length; i++){
//     for(let j = i +1; j<alfabate.length; j++){
//         console.log(alfabate[i] + alfabate [j]);
//     }
// }

// for(let i = 0; i < 12; i ++){
//     const print = i;
//     console.log(print);
// }

// for (let i = 1; i <= 10; i ++){
//     console.log(`namta : ${i}`);
//     for(let j = 1; j<=10; j ++){
//         console.log( i + ' * ' + j + ' = ' + i * j );
//     }
// }

// for(let i = 0; i <= 20; i ++){
//     if(i === 7){
//         console.log(`7 is comming sir`);
//         break
//     }
//     console.log(`your number is : ${i}`);
// }
// for(let i = 0; i <= 20; i ++){
//     if(i === 7){
//         console.log(`7 is comming sir`);
//         continue;
//     }
//     console.log(`your number is : ${i}`);
// }

// let score = 3;
// do {
//     console.log(`your socore is ${score}`);
//    score ++ ;
// } while(score<=12) 

// const priceCart =[
//     {
//         BookName : 'Amar Book',
//         price : 20
//     },
//     {
//         BookName : 'golper Book',
//         price : 30
//     },
//     {
//         BookName : 'Programing Book',
//         price : 60
//     },
//     {
//         BookName : 'cartoon Book',
//         price : 25
//     },
//     {
//         BookName : 'Amar Book',
//         price : 20
//     },
//     {
//         BookName : 'History Book',
//         price : 12
//     }
// ]

// const total = priceCart.reduce((acc,carentval)=> acc + carentval.price,0);
// console.log(total);


function bigo(n){
    for(let i=0; i<= n; i++){
        for(let j=0; j<=n; j++){
            console.log(`i= ${i} , j= ${j}`);
        }
    }
}

bigo(4)