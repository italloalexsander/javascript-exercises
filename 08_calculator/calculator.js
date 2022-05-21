const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0)
};

const multiply = function() {
  return Array.from(arguments[0]).reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1)
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(number) {
  if(number === 0){
    return 1;
  }
  else{
    let factResult = 1;
    for(i = 1; i <= number; i++){
      factResult *= i;
    }
    return factResult;
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
