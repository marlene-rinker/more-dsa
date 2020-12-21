'use strict';

const arrayMath = require('./array-math.js');

describe('Testing array math', () => {
  it ('should return an object with the sum, max, min, and average of the numbers in the array', () => {
    expect(arrayMath([4, 7, 9, 10])).toEqual({ sum: 30, min: 4, max: 10, avg: 7.5 });
    expect(arrayMath([-4, -7, -9, -10])).toEqual({ sum: -30, min: -10, max: -4, avg: -7.5 });
    expect(arrayMath([-9, 6, 200, 0, 75, 6])).toEqual({ sum: 278, min: -9, max: 200, avg: 46.33 });
    expect(arrayMath([3])).toEqual({ sum: 3, min: 3, max: 3, avg: 3 });
    expect(arrayMath([1, 2])).toEqual({ sum: 3, min: 1, max: 2, avg: 1.5 });
    
  })
});  