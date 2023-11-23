const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calcul.test.js', () => {
  describe("ADD", () => {
    it('calculateNumber(1, 3) should return 4', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('calculateNumber(1, 3.7) should return 5', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('calculateNumber(1, 3.3) should return 4', () => {
      assert.equal(calculateNumber('SUM', 1, 3.3), 4);
    });
    it('calculateNumber(1.2, 3) should return 4', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3), 4);
    });
    it('calculateNumber(1.5, 3) should return 5', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3), 5);
    });
    it('calculateNumber(1.2, 3.3) should return 4', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.3), 4);
    });
    it('calculateNumber(1.5, 3.3) should return 5', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.3), 5);
    });
    it('calculateNumber(1.3, 3.7) should return 5', () => {
      assert.equal(calculateNumber('SUM', 1.3, 3.7), 5);
    });
    it('calculateNumber(1.5, 3.7) should return 6', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('calculateNumber(0, 3) should return 3', () => {
      assert.equal(calculateNumber('SUM', 0, 3), 3);
    });
    it('calculateNumber(0, 3.3) should 3', () => {
      assert.equal(calculateNumber('SUM', 0, 3.3), 3);
    });
    it('calculateNumber(0, 3.7) should return 4', () => {
      assert.equal(calculateNumber('SUM', 0, 3.7), 4);
    });
    it('calculateNumber(1, 0) should return 1', () => {
      assert.equal(calculateNumber('SUM', 1, 0), 1);
    });
    it('calculateNumber(1.2, 0) should return 1', () => {
      assert.equal(calculateNumber('SUM', 1.2, 0), 1);
    });
    it('calculateNumber(1.9, 0) should return 2', () => {
      assert.equal(calculateNumber('SUM', 1.9, 0), 2);
    });
    it('calculateNumber(0, 0) should return 0', () => {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
    it('calculateNumber(-1, 0) should return -1', () => {
      assert.equal(calculateNumber('SUM', -1, 0), -1);
    });
    it('calculateNumber(-1, 3) should return 2', () =>  {
      assert.equal(calculateNumber('SUM', -1, 3), 2);
    });
    it('calculateNumber(-1, 3.3) should return 2', () => {
      assert.equal(calculateNumber('SUM', -1, 3.3), 2);
    });
    it('calculateNumber(-1, 3.7) should return 3', () => {
      assert.equal(calculateNumber('SUM', -1, 3.7), 3);
    });
    it('calculateNumber(-1, -3) should return -4', () => {
      assert.equal(calculateNumber('SUM', -1, -3), -4); 
    });
    it('calculateNumber(-1.3, -3) should return -4', () => {
      assert.equal(calculateNumber('SUM', -1.3, -3), -4);
    });
    it('calculateNumber(-1.6, -3) should return -5', () => {
      assert.equal(calculateNumber('SUM', -1.6, -3), -5);
    });
    it('calculateNumber(-1.3, -3.3) should return -4', () => {
      assert.equal(calculateNumber('SUM', -1.3, -3.3), -4);
    });
    it('calculateNumber(-1.6, -3.3) should return -5', () => {
      assert.equal(calculateNumber('SUM', -1.6, -3.3), -5);
    });
    it('calculateNumber(-1.3, -3.7) should return -5', () => {
      assert.equal(calculateNumber('SUM', -1.3, -3.7), -5);
    });
    it('calculateNumber(-1.3, -3.3) should return -4', () => {
      assert.equal(calculateNumber('SUM', -1.3, -3.3), -4);
    });
    it('calculateNumber(-1.6, -3.7) should return -6', () => {
      assert.equal(calculateNumber('SUM', -1.6, -3.7), -6);
    });
  });

  describe("SUBTRACT", () => {
    it('calculateNumber(1, 3) should return -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('calculateNumber(1, 3.7) should return -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('calculateNumber(1, 3.3) should return -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.3), -2);
    });
    it('calculateNumber(1.2, 3) should return -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3), -2);
    });
    it('calculateNumber(1.5, 3) should return -1', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3), -1);
    });
    it('calculateNumber(1.2, 3.3) should return -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.3), -2);
    });
    it('calculateNumber(1.5, 3.3) should return -1', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.3), -1);
    });
    it('calculateNumber(1.3, 3.7) should return -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.3, 3.7), -3);
    });
    it('calculateNumber(1.5, 3.7) should return -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('calculateNumber(0, 3) should return -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 3), -3);
    });
    it('calculateNumber(0, 3.3) should -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 3.3), -3);
    });
    it('calculateNumber(0, 3.7) should return -4', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 3.7), -4);
    });
    it('calculateNumber(1, 0) should return 1', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 0), 1);
    });
    it('calculateNumber(1.2, 0) should return 1', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 0), 1);
    });
    it('calculateNumber(1.9, 0) should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.9, 0), 2);
    });
    it('calculateNumber(0, 0) should return 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it('calculateNumber(-1, 0) should return -1', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, 0), -1);
    });
    it('calculateNumber(-1, 3) should return -4', () =>  {
      assert.equal(calculateNumber('SUBTRACT', -1, 3), -4);
    });
    it('calculateNumber(-1, 3.3) should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, 3.3), -4);
    });
    it('calculateNumber(-1, 3.7) should return 3', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, 3.7), -5);
    });
    it('calculateNumber(-1, -3) should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
    });
    it('calculateNumber(-1.3, -3) should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.3, -3), 2);
    });
    it('calculateNumber(-1.6, -3) should return 1', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.6, -3), 1);
    });
    it('calculateNumber(-1.3, -3.3) should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.3, -3.3), 2);
    });
    it('calculateNumber(-1.6, -3.3) should return 1', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.6, -3.3), 1);
    });
    it('calculateNumber(-1.3, -3.7) should return 3', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.3, -3.7), 3);
    });
    it('calculateNumber(-1.3, -3.3) should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.3, -3.3), 2);
    });
    it('calculateNumber(-1.6, -3.7) should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', -1.6, -3.7), 2);
    });
  });

  describe("DIVIDE", () => {
    it('a: 0   / b: 5   ==> 0', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 5), 0);
    });
    it('a: 1.4 / b: 0.3 ==> "Error"', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0.3), 'Error');
    });
    it('a: 4.5 / b: 0 ==> "Error', () => {
      assert.equal(calculateNumber('DIVIDE', 4.5, 0), 'Error');
    });
    it('a: 4.5 / b: 0.7 ==> 5', () => {
      assert.equal(calculateNumber('DIVIDE', 4.5, 0.7), 5);
    });
    it('a: 1.4 / b: 4.5 ==> 0.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('a: 4.5 / b: 1.5 ==> 2.5', () => {
      assert.equal(calculateNumber('DIVIDE', 4.5, 1.5), 2.5);
    });

    it('a: -4.5 / b: 0.7 ==> -5', () => {
      assert.equal(calculateNumber('DIVIDE', -4.5, 0.7), -4);
    });
    it('a: -4.8 / b: 0.7 ==> -5', () => {
      assert.equal(calculateNumber('DIVIDE', -4.8, 0.7), -5);
    });
    it('a: -1.4 / b: 4.5 ==> -0.2', () => {
      assert.equal(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    });
    it('a: -4.5 / b: 1.5 ==> -2.5', () => {
      assert.equal(calculateNumber('DIVIDE', -4.5, 1.5), -2);
    });
    it('a: -4.8 / b: 1.7 ==> -2.5', () => {
      assert.equal(calculateNumber('DIVIDE', -4.8, 1.7), -2.5);
    });

    it('a: 4.5 / b: -0.7 ==> "Error"', () => {
      assert.equal(calculateNumber('DIVIDE', 4.5, -0.5), 'Error');
    });
    it('a: 4.8 / b: -0.7 ==> -5', () => {
      assert.equal(calculateNumber('DIVIDE', 4.8, -0.7), -5);
    });
    it('a: 1.4 / b: -4.5 ==> -0.25', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
    });
    it('a: 1.4 / b: -4.8 ==> -0.25', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, -4.8), -0.2);
    });
    it('a: 4.5 / b: -1.5 ==> -2.5', () => {
      assert.equal(calculateNumber('DIVIDE', 4.5, -1.5), -5);
    });
    it('a: 4.3 / b: -1.6 ==> -2', () => {
      assert.equal(calculateNumber('DIVIDE', 4.3, -1.6), -2);
    });
    it('a: 4.8 / b: -1.7 ==> -2.5', () => {
      assert.equal(calculateNumber('DIVIDE', 4.8, -1.7), -2.5);
    });

    it('a: -4.5 / b: -0.7 ==> "Error"', () => {
      assert.equal(calculateNumber('DIVIDE', -4.5, -0.5), 'Error');
    });
    it('a: -4.8 / b: -0.7 ==> -5', () => {
      assert.equal(calculateNumber('DIVIDE', -4.8, -0.7), 5);
    });
    it('a: -1.4 / b: -4.5 ==> -0.25', () => {
      assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });
    it('a: -1.4 / b: -4.8 ==> -0.25', () => {
      assert.equal(calculateNumber('DIVIDE', -1.4, -4.8), 0.2);
    });
    it('a: -4.5 / b: -1.5 ==> -2.5', () => {
      assert.equal(calculateNumber('DIVIDE', -4.5, -1.5), 4);
    });
    it('a: -4.3 / b: -1.6 ==> -2', () => {
      assert.equal(calculateNumber('DIVIDE', -4.3, -1.6), 2);
    });
    it('a: -4.8 / b: -1.7 ==> -2.5', () => {
      assert.equal(calculateNumber('DIVIDE', -4.8, -1.7), 2.5);
    });

    describe("Undefined", () => {
      it('a: 1.4 + (sum) b: 4.5 ==> undefined', () => {
        assert.equal(calculateNumber('sum', 1.4, 4.5), undefined);
      });
      it('a: 1.4 - (subtract) b: 4.5 ==> undefined', () => {
        assert.equal(calculateNumber('subtract', 1.4, 4.5), undefined);
      });
      it('a: 1.4 / (divide) b: 4.5 ==> undefined', () => {
        assert.equal(calculateNumber('divide', 1.4, 4.5), undefined);
      });
      it('a: 1.4 * (multiply) b: 4.5 ==> undefined', () => {
        assert.equal(calculateNumber('multiply', 1.4, 4.5), undefined);
      });
      it('a: 1.4 * (MULTIPLY) b: 4.5 ==> undefined', () => {
        assert.equal(calculateNumber('MULTIPLY', 1.4, 4.5), undefined);
      });
    })
  });
});
