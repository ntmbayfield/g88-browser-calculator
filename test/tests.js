const { expect } = chai

describe('check tests are running', () => {
  it('Check Tests running', () => {
    expect(true).to.equal(true);
  })
})

describe('check screen helpers', () => {
  afterEach(() => { clearScreen() })

  it('can get/set the screen', () => {
    setScreen('test')
    expect(getScreen()).to.equal('test');
  })

  it('clears the Screen', () => {
    setScreen('test')
    clearScreen()

    expect(getScreen()).to.equal('');
  })

  it('parse turns 1+1 into [1, '+', 1]', () => {
    expect(parseScreen('1+1')).to.deep.equal([1, '+', 1]);
  })

  it('parse gets info from screen and parses it', () => {
    setScreen('1+1')
    expect(parseScreen()).to.deep.equal([1, '+', 1]);
  })

  it('can tell if the screen has plus operator', () => {
    setScreen('1+1')
    expect(screenHasOperator()).to.equal(true);
  })

  it('can tell if the screen has minus operator', () => {
    setScreen('1-1')
    expect(screenHasOperator()).to.equal(true);
  })

  it('can tell if the screen has mulitply operator', () => {
    setScreen('1x1')
    expect(screenHasOperator()).to.equal(true);
  })

  it('can tell if the screen has division operator', () => {
    setScreen('1÷1')
    expect(screenHasOperator()).to.equal(true);
  })

  it('can tell if the screen does not have an operator', () => {
    setScreen('123')
    expect(screenHasOperator()).to.equal(false);
  })
})

describe('calculating', () => {
  afterEach(() => { clearScreen() })

  it('uses parseScreen with calculate', () =>{
    let params = parseScreen('1+1')
    let result = calculate(...params)
    expect(result).to.equal(2);
  })

  it('adds 1+1 and gets 2', () => {
    let result = calculate(1, '+', 1)
    expect(result).to.equal(2);
  })
  it('subtracts 2-1 and gets 1', () => {
    let result = calculate(2, '-', 1)
    expect(result).to.equal(1);
  })
  it('multiplies 2*2 and gets 4', () => {
    let result = calculate(2, 'x', 2)
    expect(result).to.equal(4);
  })
  it('divides 4/2 and gets 2', () => {
    let result = calculate(4, '÷', 2)
    expect(result).to.equal(2);
  })
  it('adds with mulitple digits', () => {
    let result = calculate('123', '+', '456')
    expect(result).to.equal(579);
  })
  it('gives an error when dividing by zero', () => {
    expect(calculate(1, '÷', 0)).to.equal('ERROR')
  })
})


describe('BDD', () => {
  // helper method to find a particular calculator button in the DOM
  let buttonElems = {} // cache buttons from the DOM
  const buttons = document.querySelectorAll('.buttons span')
  const findButton = (value) => {
    if (!buttonElems[value]) {
      for (let i = 0; i < buttons.length; i++) {
        let elem = buttons[i]
        if (elem.innerText === value) {
          buttonElems[value] = elem
          break
        }
      }
    }

    return buttonElems[value]
  }

  afterEach(() => { clearScreen() })

  it('clears the screen', () => {
    // set the Screen
    setScreen('testing123')
    // click clear button
    findButton('C').click()

    // check the screen is clear
    expect(getScreen()).to.equal('');
  })

  it('does addtion', () => {
    findButton('1').click()
    findButton('+').click()
    findButton('1').click()
    expect(getScreen()).to.equal('1+1');

    findButton('=').click()
    expect(getScreen()).to.equal('2');
  })

  it('does subtraction', () => {
    findButton('1').click()
    findButton('2').click()
    findButton('-').click()
    findButton('1').click()
    expect(getScreen()).to.equal('12-1');

    findButton('=').click()
    expect(getScreen()).to.equal('11');
  })

  it('does mulitplication', () => {
    findButton('1').click()
    findButton('0').click()
    findButton('x').click()
    findButton('1').click()
    findButton('0').click()

    expect(getScreen()).to.equal('10x10');

    findButton('=').click()
    expect(getScreen()).to.equal('100');
  })

  it('does division', () => {
    findButton('1').click()
    findButton('0').click()
    findButton('0').click()
    findButton('÷').click()
    findButton('1').click()
    findButton('0').click()

    expect(getScreen()).to.equal('100÷10');

    findButton('=').click()
    expect(getScreen()).to.equal('10');
  })

  it('catches division by zero', () => {
    findButton('1').click()
    findButton('÷').click()
    findButton('0').click()

    expect(getScreen()).to.equal('1÷0');

    findButton('=').click()
    expect(getScreen()).to.equal('ERROR');
  })

  it('allows only one operator', () => {
    findButton('1').click()
    findButton('+').click()
    findButton('1').click()
    findButton('-').click()
    findButton('+').click()
    findButton('x').click()
    findButton('÷').click()

    expect(getScreen()).to.equal('1+1');

    findButton('=').click()
    expect(getScreen()).to.equal('2');
  })
})
