// Q-1 we gona print prime number series?

// we gonna write function which will take two number is from and to 7 - 97

// algo
// 1- if number is 1 return 1
// 2- return 2
// 3- for loop from 3 to n-1 and  modules of each number
// of each number if result is 0
// we will break else continue

const isPrimeNumber =(num) =>{
    if (num===1)return false;
    for (let i=2; i<num; i++){
        if (num%2===0)return;
    }return num;
}
// for (i=7; i<97; i++){
//     if(isPrimeNumber(i)){
//         console.log(isPrimeNumber(i))
//     }
// }

const printPrimeNumList =(fromNum, toNum)=>{
    if(isPrimeNumber(fromNum)!=null){
        console.log(isPrimeNumber(fromNum));
    }
    fromNum++;
    if(fromNum<=toNum){
        printPrimeNumList(fromNum,toNum)
    }
}

function promptInput(){
    let toNum = prompt('enter starting number')
    let fromNum =prompt('enter last number');
    toNum = parseInt(toNum)
    fromNum = parseInt(fromNum)
    printPrimeNumList(toNum, fromNum)
}

printPrimeNumList(7,97)