let num = 50;

for (let i=1; i<=num; i++){
    let copy = i;
    let reversedNum = 0;
        while(copy > 0){
            let dig = copy % 10
            reversedNum = reversedNum * 10 + dig;
            copy = Math.floor(copy/10);
        }
    if(reversedNum === i){
        console.log(i);
    }
}