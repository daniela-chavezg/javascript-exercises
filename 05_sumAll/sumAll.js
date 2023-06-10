const sumAll = function(num1, num2) {
    
    if (typeof num1 !== "number" || 
        typeof num2 !== "number" ||
        num1 < 0 || num2 < 0){
            return "ERROR";
        }
        
    let i;
    let bigNumber;
    if (num1 < num2){
        i = num1;
        bigNumber = num2;
    }else{
        i = num2;
        bigNumber = num1;
    }

    let result = 0;
    for (i; i <= bigNumber; i ++){
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
