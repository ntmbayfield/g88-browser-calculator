const expect = chai.expect

describe('calculator', function () {
  it('is an object', function () {
    expect(calc).to.be.a('object')
  })
})

describe("calc[+]", function () {

    it("should be a function", function() {
      expect(calc["+"]).to.be.a('function');
    })

    it('should add two values', function () {
      expect(calc["+"](5,20)).to.be.equal(25)
    })
  })

  describe("#calc[-]", function () {
    it("should be a function", function() {
      expect(calc["-"]).to.be.a('function');
    })

    it('should subtract values', function () {
      expect(calc["-"](20,10)).to.be.equal(10)
    })
  })

  describe("calc[x]", function () {

    it("should be a function", function() {
      expect(calc["x"]).to.be.a('function');
    })

      it('should multiply two values', function () {
        expect(calc["x"](2,2)).to.be.equal(4)
      })
  })
  describe("#calc[÷]", function () {

    it("should be a function", function() {
      expect(calc["÷"]).to.be.a('function');
    })

    it('should divide two values', function () {
          expect(calc["÷"](2,2)).to.be.equal(1)
      })
  })
