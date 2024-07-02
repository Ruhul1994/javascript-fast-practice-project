let spid = 40;

// let rightSpid = spid == 30 ? "your spid is normal" : spid >30 ? "you are so fast": "you are slow now";

// console.log(rightSpid);

// let msg;
// switch (spid) {
//     case 30 :
//         msg = 'you are normal';
//         break;
//     case 40: 
//     msg = 'you are too fast';
//     break;
//     default:
//         msg = 'you are too slow now';
// }

// console.log(msg);


let randomNumber = Math.random();
let result ="";

function Game(gess){
    if(randomNumber < 0.5){
        result = "Head";
    }else {
        result = "Tail";
    }
return result == gess ? console.log('you wine'): console.log('you lost');
}

Game('Head');