// create sum function return 2 parameters sum;
//create totalsum function return unlimited parameters sum;
// must use ArithArithmetic  operation,
// must use Rest operator and forEach method.

function sum(para1,para2){
    return para1 + para2;
}

console.log(sum(4,5));

function totalsum (...para){
    let total = 0;
    para.forEach((parElement) => {
        total += parElement
    })
    return total;
}

console.log(totalsum (4,8,2));