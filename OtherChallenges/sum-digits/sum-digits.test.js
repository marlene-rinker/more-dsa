const sumInteger = require('./sum-digits.js');

describe('Testing sum integer', () => {
  it ('should return single digit sum of the digits of an integer', () => {
    expect(sumInteger(5)).toEqual(5);
    expect(sumInteger(50)).toEqual(5);
    expect(sumInteger(999)).toEqual(9);
    expect(sumInteger(1056892)).toEqual(4);
    expect(sumInteger(0)).toEqual(0);
  })
}); 