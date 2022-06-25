let num = 121;
let copy = num;
let reversedNum = 0;

while(copy>0){
    let dig = copy % 10;
    reversedNum = reversedNum * 10 + dig;
    copy = Math.floor(copy/10);
}
console.log(reversedNum === num);