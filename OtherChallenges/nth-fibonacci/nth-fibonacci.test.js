'use strict';

const findNthFibonacci = require('./nth-fibonacci.js');

describe('Testing find nth-fibonacci number', () => {
  it ('should return the nth fibonacci number', () => {
    expect(findNthFibonacci(5)).toEqual(3);
    expect(findNthFibonacci(1)).toEqual(1);
    expect(findNthFibonacci(0)).toEqual(0);
    expect(findNthFibonacci(10)).toEqual(34);
    expect(findNthFibonacci(2)).toEqual(1);
    expect(findNthFibonacci(8)).toEqual(13);
    expect(findNthFibonacci(24)).toEqual(28657);
  })
});  