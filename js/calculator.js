const calculator = {};

//create functions for standard math operations:
calculator.add = function (a, b) {
  return a + b;
}

calculator.substract = function(a, b) {
  return a - b;
}

calculator.multiply = function(a, b) {
  return a * b;
}

calculator.divide = function(a, b) {
  if (b === 0) {
    return 'Error';
  } else {
    return a / b;
  }
}

calculator.clear = function() {
  return '';
}
