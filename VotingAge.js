/**
 * Given a number age. You need to find if that age is coming under voting age. 
 * Age can be considered as the voting age if it is greater than 18.
 * 
 * Input - 25   Output - true
 */

// algorithim (my approch)
/**
 * 1. take a number by user
 * 2.compair a number is greater than 18 or not?
 */
let age = 25;
if (age >= 18) {
    console.log('true')
}
else{
    console.log('false')
} 
// function based solve

function isVotingAge(n){
    if(n>=18) return true
    else return false
}
console.log(isVotingAge(15))

// ternory opretor based solve

const votingAge = (num) => (num>=18) ? true:false;
console.log(votingAge(35))