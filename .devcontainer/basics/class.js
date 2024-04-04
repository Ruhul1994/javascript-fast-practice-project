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

// class AddMactin {
//     constructor(){
//         this.array = [];
//     }
//     makeArray(number){
//         this.array.push(number);
//         return this.array
//     }
//     lookUp(){
//        return this.array[this.array.length-1];
//     }
//     removeElement(){
//        return this.array.pop()
//     }
// }

// let numberArray = new AddMactin();
// numberArray.makeArray(5);
// numberArray.makeArray(8);
// numberArray.makeArray(23);
// numberArray.makeArray(29);
  
// console.log(numberArray.lookUp());
// numberArray.removeElement();
// console.log(numberArray);

// inhritance of javascript.

class MobilePhone {
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
    aiSupport(){
        console.log(`the ${this.name} brand phone model number ${this.model} has ai support.`)
    }
}

class myMobile extends MobilePhone{     // extend use for give data from inharits.
    constructor(name, model, wronty){
        super(name,model); // super use for inheritence.
        this.wronty = wronty;
    }
    sendWronty(){
        console.log(`the ${this.name} this model has provided ${this.wronty} year wronty and granty.`)
    }
}

const infinix = new myMobile('infinix','19',2);
console.log(infinix.sendWronty());