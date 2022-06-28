// Given the length of three line segments as a, b, and c., Find if they can form a triangle or not?

function triangle(a,b,c){
    if(a+b<=c||b+c<=a||c+a<=b)return false;
    else return true;
}
if(triangle(7,10,5)){
    console.log('Triangle');
}else{
    console.log('Not Triangle');
}