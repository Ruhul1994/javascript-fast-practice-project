let frutes = new Set(['mango','Apple','banana', 'orenge','orenge']);
console.log(frutes);
let newFrutes = "";
frutes.forEach((frute) => {
    newFrutes += frute + ' ';
})
console.log(newFrutes);