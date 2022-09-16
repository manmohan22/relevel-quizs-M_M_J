/**
 * Q - 2 write a function to
 * return all the values in array which is divisible by 7
 * eg - [32,34,56,21,49,11,34]
 * Ans = - [21,49,56]
 */

/**
 * algo 
 * first we got sort arry
 * we take a for loop
 * we take a new blank array
 * we take a if condition 
 * to check the div by number which is completlety divided
 * after push value in new array
 */
let array1 = [12,14,68,77,32,34,56,21,55,49,11,34]

function divBySeven(array){
    let array2 = []
    for(let i=0; i<array.length; i++){
        if (array[i]%7===0){
            array2.push(array[i])
        }
    }
    console.log(array2)
}
// divBySeven(array1);


/**
 * Q - 3 write a function to
 * return all the values in array which is divisible by n
 * eg - [32,34,56,21,49,11,34,30] 6
 * Ans = - [30]
 *
 * eg -2 -  [23,34,56,43,16,24,81,18] n = 9
 * o/p [81,18]
 */
arr1 = [23,34,56,43,16,24,81,18]
arr2 = [32,34,56,21,49,11,34,30]
 function divByVal(array,n){
    let array2 = []
    for(let i=0; i<array.length; i++){
        if (array[i]%n===0){
            array2.push(array[i])
        }
    }
    console.log(array2)
}
// divByVal(arr1,9);
// divByVal(arr2,6);


// =====================================================================

const divByN = (arr,num)=> arr.filter((element) => element % num === 0);

console.log(divByN(arr1,9));
console.log(divByN(arr2,6));