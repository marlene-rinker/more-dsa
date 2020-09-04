'use strict';

const findMissing = require('./missing-number.js');

describe('Testing missing number', () => {
  it ('should return the missing number in the array', () => {
    expect(findMissing([3, 7, 1, 2, 8, 4, 5])).toEqual('6 is the missing number');
    expect(findMissing([4, 9, 1, 5, 8, 6, 7, 3, 10])).toEqual('2 is the missing number');
    expect(findMissing([1, 2, 3, 4, 6, 7, 8, 9])).toEqual('5 is the missing number');
    expect(findMissing([9, 8, 6, 5, 4, 3, 2, 1])).toEqual('7 is the missing number');
    expect(findMissing([3, 7, 1, 2, 8, 4, 5, 6])).toEqual('no missing number');
  })
});  