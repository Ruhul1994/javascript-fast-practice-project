function primeSum(num){
    let primetotal = 0;
    for(let i =2; i<=num; i++){
        for(let j =2; j <=num; j++){
            if(i == j){
                primetotal+=i;
            }
            if (i % j === 0){
                break
            }
        }
       
    }
    
    return primetotal
}

console.log(primeSum(10))