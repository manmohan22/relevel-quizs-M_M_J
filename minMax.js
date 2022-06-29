let numArray = [12,70,10,40,30,60,0,-1,50,100];
let minValue = numArray[0];
// max value
for (let i=0; i<=numArray.length-1; i++){
    // console.log(numArray[i])
    if(numArray[i]<minValue){
        minValue= numArray[i];
    }
}
console.log(minValue);

// max value
let maxValue = numArray[0];
for (let j=0; j<=numArray.length-1; j++){
    if (numArray[j]>maxValue){
        maxValue = numArray[j];
    }
}
console.log(maxValue)