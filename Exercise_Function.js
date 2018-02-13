function addNumbers(num1,num2){
    return num1+num2;
}
function subtractNumbers(num1,num2){
    return num1-num2;   
}
function multiplyNumbers(num1,num2){
    return num1*num2
}
function divideNumbers(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,operation) {
    
    if (operation==="+"){
        return addNumbers(num1,num2);
    }else if(operation==="-"){
        return subtractNumbers(num1, num2);
    }else if(operation==="*" ) {
        return multiplyNumbers(num1, num2);
    }else if(oparation==="/") {
        return divideNumbers(num1, num2);
    }  
    return oparation;
}
calculator(2,4,"*");// 8 -> 2 * 4 
