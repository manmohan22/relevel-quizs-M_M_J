/* Given `n` pieces of sweet, help Peter and John divide it among themselves such that both get an
equal number of sweets. Note that the sweet can not be broken into sub-pieces. You have to tell if
it is possible to make such distribution or not based upon n number of pieces. I.e., possible
outputs: `yes` or `no. 
*/

function evenOdd(N){
    if(N%2 === 0){
        console.log('YES')
    }else{
        console.log('NO');
    }
}
evenOdd(8);
evenOdd(7);