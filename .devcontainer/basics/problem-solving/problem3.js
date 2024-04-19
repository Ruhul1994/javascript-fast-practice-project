// Give a rectangular matrix of characters add a border of asterisks (*) to it.

// Hints
// must use concat(), unshift(), push() method;
let pictures = ["abc","ded"]
function addBorder(pictures){
    let wall = "*".repeat(pictures[0].length + 2);
    pictures.unshift(wall);
    pictures.push(wall);
    for(let i =1; i < pictures.length -1; i++){
        pictures[i]  = "*".concat(pictures[i] , "*") // normally use the + sing
    }
    return pictures;
}

console.log(addBorder(pictures));