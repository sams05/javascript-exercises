const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, num) => product * num);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let runningFactorial = 1;
  for(let i = 2; i <= num; i++) {
    runningFactorial *= i;
  }
  return runningFactorial;
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
