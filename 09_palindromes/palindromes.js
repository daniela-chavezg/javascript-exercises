const palindromes = function (str) {
    str = str.toLowerCase();
    let start = 0;
    let end = str.length - 1;
    while (start < end){
        if (isAlphanumeric(str[start]) && isAlphanumeric([str[end]])) {
            if(str[start] === str[end]){
                start++;
                end--;
            }
            else{
                return false
            }
        }else if(!isAlphanumeric(str[start])){
            start++;
        }else{
            end--;
        }
    }
    return true;
};

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }
// Do not edit below this line
module.exports = palindromes;
