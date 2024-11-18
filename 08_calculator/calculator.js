const add = function(firstNum,secondNum) {
  return firstNum + secondNum;
};

const subtract = function(firstNum,secondNum) {
	return firstNum - secondNum;
};

const sum = function(Array) {
  let sumOfAll = 0;
	for (let A = Array.length - 1;A >= 0;A--) {
    sumOfAll += Array[A];
  }
  return sumOfAll;
};

const multiply = function(firstNum,secondNum) {
  return (firstNum * secondNum);
};

const power = function(base,exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let factorialOfNumber = 0;
	for (let i = number;i > 0;i--) {
    factorialOfNumber += number * (number - i);
  }
  return factorialOfNumber;
};

console.log(add(2,2));
console.log(subtract(5,5));
console.log(sum([1,2,3,4,5]));
console.log(multiply(2 , 2));
console.log(power(2,2));
console.log(factorial(4));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
