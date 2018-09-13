const screen = document.getElementById('screen')

const setScreen = (value) => {
  screen.innerText = value
}

const getScreen = () => screen.innerText

const clearScreen = () => {
  setScreen('')
}

const appendScreen = (value) => {
  setScreen(getScreen() + value)
}

const calculate = (num1, operator, num2) => {
  num1 = +num1
  num2 = +num2
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case 'x':
      return num1 * num2
    case '÷':
      return num2 === 0 ? 'ERROR' : (num1 / num2)
    default:
      return 'ERROR'
  }
}

const parseScreen = (input = getScreen()) => {
  let [num1, operator, num2] = input.match(/(\d+)([+\-x÷])(\d+)/).slice(1)
  return [+num1, operator, +num2]
}

const screenHasOperator = () => {
  return getScreen().match(/[+\-x÷]/) ? true : false
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('buttons-container').addEventListener('click', (event) => {
    let buttonText = event.target.innerText

    if (buttonText.match(/\d/)) {
      // append digits to screen
      appendScreen(buttonText)
    }
    else if (buttonText.match(/[+\-÷x]/)) {
      // operators ... append to screen
      if (!screenHasOperator()) {
        appendScreen(buttonText)
      }
    }
    else if (buttonText === '=') {
      // calculate stuff
      let result = calculate(...parseScreen())
      setScreen(result)
    }
    else if (buttonText === 'C') {
      // clear
      clearScreen()
    }
  })
})
