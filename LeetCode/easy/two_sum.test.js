'use strict';

const twoSum = require('./two_sum.js');

describe('Testing two sum', () => {
  it ('should return an array with the indices of two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([ 0, 1 ]);
    expect(twoSum([8, 2, -4, 2], 4)).toEqual([ 0, 2 ]);
    expect(twoSum([0, 8, -3, -2], -5)).toEqual([ 2, 3 ]);
    expect(twoSum([2, 8, 11, 25], 4)).toEqual([]);
  })
});  