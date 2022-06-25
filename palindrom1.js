// let word = "kayak";
function palindrom(word){

    let low = Math.floor(word.length/2);// low == length of word
    
    for(let i=0; i< low; i++){
        if(word[i]!= word[word.length-1-i])return false;
    
    }
    return true;
}
let result  = palindrom('paieyiap')
console.log(result)