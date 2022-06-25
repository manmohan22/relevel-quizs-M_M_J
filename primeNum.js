function isprime(n){
    if(n===1) return false;
    //Math.sqrt is taking less time time complexitity
    for(i=2; i < Math.sqrt(n); i++){
        if(n%i===0) return false
    }return true
}
console.time()
console.log(isprime(13));
console.timeEnd();