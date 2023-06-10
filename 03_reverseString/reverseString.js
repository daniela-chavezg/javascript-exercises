const reverseString = function(str) {
    const strArray = str.split('');
    let left = 0;
    let right = strArray.length - 1;
    while (left < right){
        temp = strArray[left]
        strArray[left] = strArray[right];
        strArray[right] = temp;
        left++;
        right--;
    }

    return strArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
