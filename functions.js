let calc = {
  '+': function(x, y){return x + y},
  '-': function(x, y){return x - y},
  '÷': function(x, y){return x / y},
  'x': function(x, y){return x * y}
}

const calculator = {};

// set up function for possible math operations:
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
  return ''
}
