/**
 * Given three numbers. Your task is to check the order of three numbers. 
 * If they are in increasing order, print “Increasing order”. 
 * If they are in decreasing order, print “Decreasing Order”.
 * Else print “neither increasing or decreasing order
 * 
 * Input – 12, 45, 87
 * 
 * Output – Increasing order
 */

// my approch 
/**
 * take 3 variable a,b,c
 * check a<b and b<c 
 * else if a>b and b>c 
 * else “neither increasing or decreasing order"
 */
// function base approch

function incAndDec(a,b,c){
    if(a<b && b<c){
        console.log("Increasing order")
    }
    else if(a>b && b>c){
        console.log("Decreasing Order")
    }
    else{
        console.log("Neither Increasing or Decreasing Order")
    }
}
incAndDec(87,14,24);

