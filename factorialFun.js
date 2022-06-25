function factorial(n){
    let sum =1
    for(i=n; i>=1; i--){
        sum = sum*i  
    }
    console.log(sum)
    sum = sum%10;
    console.log(sum === 0)
}

factorial(7);