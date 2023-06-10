const repeatString = function(str, num) {
    let result = '';
    for (let i = 0; i < num; i++){
        result += str
    }

    if (num < 0){
        result = 'ERROR'
    }
    
    return result 

};

// Do not edit below this line
module.exports = repeatString;
