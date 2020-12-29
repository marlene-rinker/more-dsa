'use strict';

const numberOfWays = require('./coin-problem.js');

describe('Testing coin problem', () => {
  it ('should return number of ways to make the amount of money with the available denominations', () => {
    expect(numberOfWays(6, [3, 10, 2, 8, 6])).toEqual(3);
    expect(numberOfWays(4, [1, 2, 3])).toEqual(4);
    expect(numberOfWays(6, [2, 10, 2, 8, 6])).toEqual(5);
    expect(numberOfWays(4, [0, 20, 30])).toEqual(0);
    expect(numberOfWays(4, [30, 20, 30])).toEqual(0);
    expect(numberOfWays(4, [])).toEqual(0);
  })

});  