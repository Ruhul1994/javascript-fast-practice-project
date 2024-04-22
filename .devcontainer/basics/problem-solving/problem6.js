// pattren one.
let row = 5;
let col = 16;
let star=""
for(let i=1; i<=row; i++){
    for(let j=1; j<=col; j++){
        star += '*'
    }
    star += '\n';
}
// console.log(star);

// pattren Hollow rectangle .
let star2=""
for(let i=1; i<=row; i++){
    for(let j=1; j<=col; j++){
    if(j==1 || j == col){
        star2 +='*';
    } else if(i==1 || i==row){
        star2 += "*"
    }else{
        star2 += ' '
    }
    }
    star2 += '\n';
}
//console.log(star2);

// invarted half pyramid.
const n = 6;
let star3 =""
for(let i=n; i>1; i--){
    console.log('i='+ i)
    for(let j=1; j<i; j++){
        console.log('j=' + j)
        star3 += "*"
    }
    star3 += '\n';
}

console.log(star3);