// write a program for calculator in js?

function calculator(x,y,oprator){
    if (oprator == '+'){
        console.log(x+y);
    }
    else if(oprator=='-'){
        console.log(x-y);
    }
    else if(oprator == '*'){
        console.log(x*y);
    }
    else if(oprator == '/'){
        console.log(x/y);
    }
    else if(oprator == '%'){
        console.log(x%y);
    }
}
calculator(9,8,'+')
calculator(9,2,'-')
calculator(9,2,'*')
calculator(9,2,'/')
calculator(9,2,'%')