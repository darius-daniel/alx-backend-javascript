const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Tests for calculateNumber', () => {
  it('calculateNumber(1, 3) should return 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('calculateNumber(1, 3.7) should return 5', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('calculateNumber(1, 3.3) should return 4', () => {
    assert.equal(calculateNumber(1, 3.3), 4);
  });
  it('calculateNumber(1.2, 3) should return 4', () => {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
  it('calculateNumber(1.5, 3) should return 5', () => {
    assert.equal(calculateNumber(1.5, 3), 5);
  });
  it('calculateNumber(1.2, 3.3) should return 4', () => {
    assert.equal(calculateNumber(1.2, 3.3), 4);
  });
  it('calculateNumber(1.5, 3.3) should return 5', () => {
    assert.equal(calculateNumber(1.5, 3.3), 5);
  });
  it('calculateNumber(1.3, 3.7) should return 5', () => {
    assert.equal(calculateNumber(1.3, 3.7), 5);
  });
  it('calculateNumber(1.5, 3.7) should return 6', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('calculateNumber(0, 3) should return 3', () => {
    assert.equal(calculateNumber(0, 3), 3);
  });
  it('calculateNumber(0, 3.3) should 3', () => {
    assert.equal(calculateNumber(0, 3.3), 3);
  });
  it('calculateNumber(0, 3.7) should return 4', () => {
    assert.equal(calculateNumber(0, 3.7), 4);
  });
  it('calculateNumber(1, 0) should return 1', () => {
    assert.equal(calculateNumber(1, 0), 1);
  });
  it('calculateNumber(1.2, 0) should return 1', () => {
    assert.equal(calculateNumber(1.2, 0), 1);
  });
  it('calculateNumber(1.9, 0) should return 2', () => {
    assert.equal(calculateNumber(1.9, 0), 2);
  });
  it('calculateNumber(0, 0) should return 0', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('calculateNumber(-1, 0) should return -1', () => {
    assert.equal(calculateNumber(-1, 0), -1);
  });
  it('calculateNumber(-1, 3) should return 2', () =>  {
    assert.equal(calculateNumber(-1, 3), 2);
  });
  it('calculateNumber(-1, 3.3) should return 2', () => {
    assert.equal(calculateNumber(-1, 3.3), 2);
  });
  it('calculateNumber(-1, 3.7) should return 3', () => {
    assert.equal(calculateNumber(-1, 3.7), 3);
  });
  it('calculateNumber(-1, -3) should return -4', () => {
    assert.equal(calculateNumber(-1, -3), -4);
  });
  it('calculateNumber(-1.3, -3) should return -4', () => {
    assert.equal(calculateNumber(-1.3, -3), -4);
  });
  it('calculateNumber(-1.6, -3) should return -5', () => {
    assert.equal(calculateNumber(-1.6, -3), -5);
  });
  it('calculateNumber(-1.3, -3.3) should return -4', () => {
    assert.equal(calculateNumber(-1.3, -3.3), -4);
  });
  it('calculateNumber(-1.6, -3.3) should return -5', () => {
    assert.equal(calculateNumber(-1.6, -3.3), -5);
  });
  it('calculateNumber(-1.3, -3.7) should return -5', () => {
    assert.equal(calculateNumber(-1.3, -3.7), -5);
  });
  it('calculateNumber(-1.3, -3.3) should return -4', () => {
    assert.equal(calculateNumber(-1.3, -3.3), -4);
  });
  it('calculateNumber(-1.6, -3.7) should return -6', () => {
    assert.equal(calculateNumber(-1.6, -3.7), -6);
  });
});
