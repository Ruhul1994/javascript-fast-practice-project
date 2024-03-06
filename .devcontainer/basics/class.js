// class Pitha {
//     constructor(sugar, coconut){
//         this.sugar = sugar;
//         this.coconut = coconut;
//     }
//     makePitha(sugar,coconut){
//         return sugar + coconut;
//     }
// }

// let newVapa = new Pitha(3,5);
// // console.log(newVapa.coconut);
// console.log(newVapa.makePitha(6,4));

class AddMactin {
    constructor(){
        this.array = [];
    }
    makeArray(number){
        this.array.push(number);
    }
}

let numberArray = new AddMactin();
numberArray.makeArray([3,4,56,7,3]);
// console.log(numberArray)