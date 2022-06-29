function minMax(arrNum,oder){
    let minValue = arrNum[0], maxValue = arrNum[0];
    if (oder === 'min'){

        for (let i=0; i<=arrNum.length-1; i++){
        // console.log(numArray[i])
            if(arrNum[i]<minValue){
                minValue = arrNum[i];
            }
        }return minValue
    }
    else if(oder === 'max') {
        for (let i=0; i<=arrNum.length-1; i++){
            if (arrNum[i]>maxValue){
                maxValue = arrNum[i];
            }
        }return maxValue
    }
    
}
let numArray = [12,70,10,40,30,60,0,-1,50,100];
minResult = minMax(numArray ,'min');
maxResult = minMax(numArray ,'max');
console.log(minResult)
console.log(maxResult)