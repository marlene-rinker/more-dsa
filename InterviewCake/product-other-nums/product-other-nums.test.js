'use strict';

const test = require('./product-other-nums.js');

describe('Testing product of other numbers', () => {
  it ('should return an array with the products of all the other numbers in the array at the index', () => {    
    expect(test.productOtherNums([1, 2, 6, 5, 9])).toEqual([ 540, 270, 90, 108, 60 ]);
    expect(test.anotherProdOtherNums([1, 2, 6, 5, 9])).toEqual([ 540, 270, 90, 108, 60 ]);
    expect(test.productOtherNums([1, 3])).toEqual([ 3, 1 ]);
    expect(test.anotherProdOtherNums([1, 3])).toEqual([ 3, 1 ]);
    expect(test.productOtherNums([-1,-3,-6,-10])).toEqual([ -180, -60, -30, -18 ]);
    expect(test.anotherProdOtherNums([-1,-3,-6,-10])).toEqual([ -180, -60, -30, -18 ]);


    })

  it ('should return a message if array does not have at least 2 numbers', () => {    
    expect(test.productOtherNums([1])).toEqual('array must contain at least 2 numbers');
    expect(test.productOtherNums([])).toEqual('array must contain at least 2 numbers');
    expect(test.anotherProdOtherNums([1])).toEqual('array must contain at least 2 numbers');
    expect(test.anotherProdOtherNums([])).toEqual('array must contain at least 2 numbers');
    })
});  