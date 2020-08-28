'use strict';

const reverseInteger = require('./reverse-integer.js');

describe('Testing reverse integer', () => {
  it ('should return the integer in reverse order', () => {
    expect(reverseInteger(123)).toEqual(321);
    expect(reverseInteger(-12345)).toEqual(-54321);
    expect(reverseInteger(120)).toEqual(21);
  })
});  