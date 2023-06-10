const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
  const sum = numbers.reduce((total, val) => {
    return total + val;
  }, 0);
	
  return sum
};

const multiply = function(numbers) {
  const product = numbers.reduce((total, val) => {
    return total * val;
  }, 1);

  return product
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(n) {
  if (n === 0 || n ===1){
    return 1;
  }else{
    return n * (factorial(n-1));
  }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
