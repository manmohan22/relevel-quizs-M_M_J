// Given a number n, calculate n!

function factorRecursion(N){
    if(N==0) return 1
    return N * factorial(N-1)
}
function factorial(N){
    let sum = 1
    for(let i=N; i>=1; i--){
        sum = sum * i;
    }
    return sum
}

console.log(factorial(5));
console.log(factorRecursion(3));