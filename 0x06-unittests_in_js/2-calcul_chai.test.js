const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('1-calcul.test.js', () => {
  describe("type == 'ADD'", () => {
    it('calculateNumber(1, 3) should return 4', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('calculateNumber(1, 3.7) should return 5', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('calculateNumber(1, 3.3) should return 4', () => {
      expect(calculateNumber('SUM', 1, 3.3)).to.equal(4);
    });
    it('calculateNumber(1.2, 3) should return 4', () => {
      expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });
    it('calculateNumber(1.5, 3) should return 5', () => {
      expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });
    it('calculateNumber(1.2, 3.3) should return 4', () => {
      expect(calculateNumber('SUM', 1.2, 3.3)).to.equal(4);
    });
    it('calculateNumber(1.5, 3.3) should return 5', () => {
      expect(calculateNumber('SUM', 1.5, 3.3)).to.equal(5);
    });
    it('calculateNumber(1.3, 3.7) should return 5', () => {
      expect(calculateNumber('SUM', 1.3, 3.7)).to.equal(5);
    });
    it('calculateNumber(1.5, 3.7) should return 6', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('calculateNumber(0, 3) should return 3', () => {
      expect(calculateNumber('SUM', 0, 3)).to.equal(3);
    });
    it('calculateNumber(0, 3.3) should 3', () => {
      expect(calculateNumber('SUM', 0, 3.3)).to.equal(3);
    });
    it('calculateNumber(0, 3.7) should return 4', () => {
      expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
    });
    it('calculateNumber(1, 0) should return 1', () => {
      expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    });
    it('calculateNumber(1.2, 0) should return 1', () => {
      expect(calculateNumber('SUM', 1.2, 0)).to.equal(1);
    });
    it('calculateNumber(1.9, 0) should return 2', () => {
      expect(calculateNumber('SUM', 1.9, 0)).to.equal(2);
    });
    it('calculateNumber(0, 0) should return 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
    it('calculateNumber(-1, 0) should return -1', () => {
      expect(calculateNumber('SUM', -1, 0)).to.equal(-1);
    });
    it('calculateNumber(-1, 3) should return 2', () =>  {
      expect(calculateNumber('SUM', -1, 3)).to.equal(2);
    });
    it('calculateNumber(-1, 3.3) should return 2', () => {
      expect(calculateNumber('SUM', -1, 3.3)).to.equal(2);
    });
    it('calculateNumber(-1, 3.7) should return 3', () => {
      expect(calculateNumber('SUM', -1, 3.7)).to.equal(3);
    });
    it('calculateNumber(-1, -3) should return -4', () => {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });
    it('calculateNumber(-1.3, -3) should return -4', () => {
      expect(calculateNumber('SUM', -1.3, -3)).to.equal(-4);
    });
    it('calculateNumber(-1.6, -3) should return -5', () => {
      expect(calculateNumber('SUM', -1.6, -3)).to.equal(-5);
    });
    it('calculateNumber(-1.3, -3.3) should return -4', () => {
      expect(calculateNumber('SUM', -1.3, -3.3)).to.equal(-4);
    });
    it('calculateNumber(-1.6, -3.3) should return -5', () => {
      expect(calculateNumber('SUM', -1.6, -3.3)).to.equal(-5);
    });
    it('calculateNumber(-1.3, -3.7) should return -5', () => {
      expect(calculateNumber('SUM', -1.3, -3.7)).to.equal(-5);
    });
    it('calculateNumber(-1.3, -3.3) should return -4', () => {
      expect(calculateNumber('SUM', -1.3, -3.3)).to.equal(-4);
    });
    it('calculateNumber(-1.6, -3.7) should return -6', () => {
      expect(calculateNumber('SUM', -1.6, -3.7)).to.equal(-6);
    });
  });

  describe("type == 'SUBTRACT'", () => {
    it('calculateNumber(1, 3) should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('calculateNumber(1, 3.7) should return -3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('calculateNumber(1, 3.3) should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.3)).to.equal(-2);
    });
    it('calculateNumber(1.2, 3) should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
    });
    it('calculateNumber(1.5, 3) should return -1', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
    });
    it('calculateNumber(1.2, 3.3) should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.3)).to.equal(-2);
    });
    it('calculateNumber(1.5, 3.3) should return -1', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.3)).to.equal(-1);
    });
    it('calculateNumber(1.3, 3.7) should return -3', () => {
      expect(calculateNumber('SUBTRACT', 1.3, 3.7)).to.equal(-3);
    });
    it('calculateNumber(1.5, 3.7) should return -2', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
    it('calculateNumber(0, 3) should return -3', () => {
      expect(calculateNumber('SUBTRACT', 0, 3)).to.equal(-3);
    });
    it('calculateNumber(0, 3.3) should -3', () => {
      expect(calculateNumber('SUBTRACT', 0, 3.3)).to.equal(-3);
    });
    it('calculateNumber(0, 3.7) should return -4', () => {
      expect(calculateNumber('SUBTRACT', 0, 3.7)).to.equal(-4);
    });
    it('calculateNumber(1, 0) should return 1', () => {
      expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    });
    it('calculateNumber(1.2, 0) should return 1', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 0)).to.equal(1);
    });
    it('calculateNumber(1.9, 0) should return 2', () => {
      expect(calculateNumber('SUBTRACT', 1.9, 0)).to.equal(2);
    });
    it('calculateNumber(0, 0) should return 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
    it('calculateNumber(-1, 0) should return -1', () => {
      expect(calculateNumber('SUBTRACT', -1, 0)).to.equal(-1);
    });
    it('calculateNumber(-1, 3) should return -4', () =>  {
      expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
    });
    it('calculateNumber(-1, 3.3) should return 2', () => {
      expect(calculateNumber('SUBTRACT', -1, 3.3)).to.equal(-4);
    });
    it('calculateNumber(-1, 3.7) should return 3', () => {
      expect(calculateNumber('SUBTRACT', -1, 3.7)).to.equal(-5);
    });
    it('calculateNumber(-1, -3) should return 2', () => {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    });
    it('calculateNumber(-1.3, -3) should return 2', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -3)).to.equal(2);
    });
    it('calculateNumber(-1.6, -3) should return 1', () => {
      expect(calculateNumber('SUBTRACT', -1.6, -3)).to.equal(1);
    });
    it('calculateNumber(-1.3, -3.3) should return 2', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -3.3)).to.equal(2);
    });
    it('calculateNumber(-1.6, -3.3) should return 1', () => {
      expect(calculateNumber('SUBTRACT', -1.6, -3.3)).to.equal(1);
    });
    it('calculateNumber(-1.3, -3.7) should return 3', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -3.7)).to.equal(3);
    });
    it('calculateNumber(-1.3, -3.3) should return 2', () => {
      expect(calculateNumber('SUBTRACT', -1.3, -3.3)).to.equal(2);
    });
    it('calculateNumber(-1.6, -3.7) should return 2', () => {
      expect(calculateNumber('SUBTRACT', -1.6, -3.7)).to.equal(2);
    });
  });

  describe("type == 'DIVIDE'", () => {
    it('a: 0   / b: 5   ==> 0', () => {
      expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
    });
    it('a: 0   / b: 3.3 ==> 0', () => {
      expect(calculateNumber('DIVIDE', 0, 3.3)).to.equal(0);
    });
    it('a: 0   / b: 3.8 ==> 0', () => {
      expect(calculateNumber('DIVIDE', 0, 3.8)).to.equal(0);
    });
    it('a: 1.4 / b: 0.3 ==> "Error"', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.3)).to.equal('Error');
    });
    it('a: 4.5 / b: 0 ==> "Error', () => {
      expect(calculateNumber('DIVIDE', 4.5, 0)).to.equal('Error');
    });
    it('a: 4.5 / b: 0.7 ==> 5', () => {
      expect(calculateNumber('DIVIDE', 4.5, 0.7)).to.equal(5);
    });
    it('a: 1.4 / b: 4.5 ==> 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('a: 4.5 / b: 1.5 ==> 2.5', () => {
      expect(calculateNumber('DIVIDE', 4.5, 1.5)).to.equal(2.5);
    });

    it('a: -4.5 / b: 0.7 ==> -5', () => {
      expect(calculateNumber('DIVIDE', -4.5, 0.7)).to.equal(-4);
    });
    it('a: -4.8 / b: 0.7 ==> -5', () => {
      expect(calculateNumber('DIVIDE', -4.8, 0.7)).to.equal(-5);
    });
    it('a: -1.4 / b: 4.5 ==> -0.2', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    });
    it('a: -4.5 / b: 1.5 ==> -2.5', () => {
      expect(calculateNumber('DIVIDE', -4.5, 1.5)).to.equal(-2);
    });
    it('a: -4.8 / b: 1.7 ==> -2.5', () => {
      expect(calculateNumber('DIVIDE', -4.8, 1.7)).to.equal(-2.5);
    });

    it('a: 4.5 / b: -0.7 ==> "Error"', () => {
      expect(calculateNumber('DIVIDE', 4.5, -0.5)).to.equal('Error');
    });
    it('a: 4.8 / b: -0.7 ==> -5', () => {
      expect(calculateNumber('DIVIDE', 4.8, -0.7)).to.equal(-5);
    });
    it('a: 1.4 / b: -4.5 ==> -0.25', () => {
      expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    });
    it('a: 1.4 / b: -4.8 ==> -0.25', () => {
      expect(calculateNumber('DIVIDE', 1.4, -4.8)).to.equal(-0.2);
    });
    it('a: 4.5 / b: -1.5 ==> -2.5', () => {
      expect(calculateNumber('DIVIDE', 4.5, -1.5)).to.equal(-5);
    });
    it('a: 4.3 / b: -1.6 ==> -2', () => {
      expect(calculateNumber('DIVIDE', 4.3, -1.6)).to.equal(-2);
    });
    it('a: 4.8 / b: -1.7 ==> -2.5', () => {
      expect(calculateNumber('DIVIDE', 4.8, -1.7)).to.equal(-2.5);
    });

    it('a: -4.5 / b: -0.7 ==> "Error"', () => {
      expect(calculateNumber('DIVIDE', -4.5, -0.5)).to.equal('Error');
    });
    it('a: -4.8 / b: -0.7 ==> -5', () => {
      expect(calculateNumber('DIVIDE', -4.8, -0.7)).to.equal(5);
    });
    it('a: -1.4 / b: -4.5 ==> -0.25', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });
    it('a: -1.4 / b: -4.8 ==> -0.25', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.8)).to.equal(0.2);
    });
    it('a: -4.5 / b: -1.5 ==> -2.5', () => {
      expect(calculateNumber('DIVIDE', -4.5, -1.5)).to.equal(4);
    });
    it('a: -4.3 / b: -1.6 ==> -2', () => {
      expect(calculateNumber('DIVIDE', -4.3, -1.6)).to.equal(2);
    });
    it('a: -4.8 / b: -1.7 ==> -2.5', () => {
      expect(calculateNumber('DIVIDE', -4.8, -1.7)).to.equal(2.5);
    });
  });

  describe("Undefined", () => {
    it('a: 1.4 + (sum) b: 4.5 ==> undefined', () => {
      expect(calculateNumber('sum', 1.4, 4.5)).to.equal(undefined);
    });
    it('a: 1.4 - (subtract) b: 4.5 ==> undefined', () => {
      expect(calculateNumber('subtract', 1.4, 4.5)).to.equal(undefined);
    });
    it('a: 1.4 / (divide) b: 4.5 ==> undefined', () => {
      expect(calculateNumber('divide', 1.4, 4.5)).to.equal(undefined);
    });
    it('a: 1.4 * (multiply) b: 4.5 ==> undefined', () => {
      expect(calculateNumber('multiply', 1.4, 4.5)).to.equal(undefined);
    });
    it('a: 1.4 * (MULTIPLY) b: 4.5 ==> undefined', () => {
      expect(calculateNumber('MULTIPLY', 1.4, 4.5)).to.equal(undefined);
    });
  })
});
