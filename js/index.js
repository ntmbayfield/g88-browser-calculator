// get document ready onload
window.onload = function() {
  calculate();
}

// set up global variables
const numbersBtn = document.querySelectorAll('span')
const display = document.getElementById('screen');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

// function to calculate simple operations
function calculate(){
  numbersBtn.forEach(function(input) {
    input.addEventListener('click', function() {
      // array with valid operators
      let validOperators = ['+', '-', 'x', '÷'];

      if (input.id !== 'clear' && input.id !== 'equals') {
        display.textContent += input.textContent;
      }

      if (input.id === 'equals') {
        validOperators.forEach(function(operator) {
          if((display.textContent).includes(operator)) {
            let result = (display.textContent).split(operator);
            let numA = parseInt(result[0]);
            let numB = parseInt(result[1]);

            if (display.textContent === 'NaN') {
              display.textContent = 'Error';
            }

            if (operator === '+') {
              display.textContent = calculator.add(numA, numB);
            }

            if (operator === '-') {
              display.textContent = calculator.substract(numA, numB);
            }

            if (operator === 'x') {
              display.textContent = calculator.multiply(numA, numB);
            }

            if (operator === '÷') {
              display.textContent = calculator.divide(numA, numB);
            }
          }
        })
      } else if (input.id === 'clear') {
        display.textContent = calculator.clear();
      }
    })
  })
}
