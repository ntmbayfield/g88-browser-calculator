const expect = chai.expect

describe('calculator', function () {
  it('is an object', function () {
    expect(calculator).to.be.a('object')
  })

  describe('#add', function () {
    it('should be a function', function () {
      expect(calculator.add).to.be.a('function')
    })

    it('should add two numbers together', function () {
      expect(calculator.add(10,20)).to.equal(30)
    })
  })

  describe('#substract', function () {
    it('should be a function', function () {
      expect(calculator.substract).to.be.a('function')
    })

    it('should substract two numbers together', function () {
      expect(calculator.substract(10,20)).to.equal(-10)
    })
  })
  describe('#multiply', function () {
    it('should be a function', function () {
      expect(calculator.multiply).to.be.a('function')
    })

    it('should multiply two numbers together', function () {
      expect(calculator.multiply(2,5)).to.equal(10)
    })
  })

  describe('#divide', function () {
    it('should be a function', function () {
      expect(calculator.divide).to.be.a('function')
    })

    it('should divide two numbers together', function () {
      expect(calculator.divide(20,2)).to.equal(10)
    })

    it('should show error when divide by zero', function () {
      expect(calculator.divide(20,0)).to.equal('Error')
    })
  })

  describe('#clear', function () {
    it('clear should return an empty string', function () {
      expect(calculator.clear()).to.equal('')
    })
  })

})
