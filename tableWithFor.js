// Write a program to create a Mathematical calculation table from 0 to given number n.

function table(num,n){
    for(let i=1; i<=n; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
table(19,30);