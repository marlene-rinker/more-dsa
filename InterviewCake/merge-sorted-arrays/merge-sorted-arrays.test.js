'use strict';

const test = require('./merge-sorted-arrays.js');

describe('Testing merge sorted arrays', () => {
  it ('should return an array with the merged values as expected', () => {
    const a1 = [3, 4, 6, 10, 11, 15];
    const a2 = [1, 5, 8, 12, 14, 19];
    const a3 = [2,15];
    const a4 = [4];
    
    expect(test.mergeArrays(a1, a2)).toEqual([
      1,  3,  4,  5,  6,
      8, 10, 11, 12, 14,
     15, 19
   ]);
    expect(test.mergeArrays(a3, a4)).toEqual([ 2, 4, 15 ]);

    expect(test.mergeSortedArrays(a1, a2)).toEqual([
      1,  3,  4,  5,  6,
      8, 10, 11, 12, 14,
     15, 19
   ]);
    expect(test.mergeSortedArrays(a3, a4)).toEqual([ 2, 4, 15 ]);
  })
});  