'use strict';

const highestProduct = require('./highest-product.js');

describe('Testing highest product of 3 numbers', () => {
  it ('should return the highest product of three numbers in the array', () => {    
    expect(highestProduct([3,2,0])).toEqual(0);
    expect(highestProduct([3,2,0,6,5,4,9])).toEqual(270);
    expect(highestProduct([3,2,0,-2,-2,9,-200])).toEqual(3600);
    expect(highestProduct([-2,-2,-2,-4,-16])).toEqual(-8);
    expect(highestProduct([1,1,1,1,1,1])).toEqual(1);
    })

  it ('should return a message if array does not have 3 numbers', () => {    
    expect(highestProduct([3,2])).toEqual('array must contain at least 3 numbers');
    expect(highestProduct([3])).toEqual('array must contain at least 3 numbers');
    expect(highestProduct([])).toEqual('array must contain at least 3 numbers');
    })
});  