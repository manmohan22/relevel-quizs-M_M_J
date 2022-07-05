/**
 * Write a program to print all the elements of the array, and multiply each element from 5
 */

 let arr = [[11,12,13],[21,22,23],[31,32,33],[41,42,43],[51,52,53]]

 for( let i=0; i<=arr.length-1; i++){
    for(let j=0; j<=arr[i].length-1; j++){
        console.log(arr[i][j] * 5)
    }
    console.log(" ")
 }