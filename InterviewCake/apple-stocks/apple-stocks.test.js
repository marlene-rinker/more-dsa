'use strict';

const getMaxProfit = require('./apple-stocks.js');

describe('Testing apple stocks', () => {
  it ('should return max profit', () => {
    let p1 = [10, 7, 5, 8, 11, 9];
    let p2 = [100, 30, 25, 60, 88, 99, 200, 500, 30, 5, 1000];
    let p3 = [1, 20, 800, 20, 800, 20, 20, 20];
    let p4 = [100, 100, 100, 100, 100];
    let p5 = [20, 15, 10, 5, 0];
    let p6 = [20];
    expect(getMaxProfit(p1)).toEqual(6);
    expect(getMaxProfit(p2)).toEqual(995);
    expect(getMaxProfit(p3)).toEqual(799);
    expect(getMaxProfit(p4)).toEqual(0);
    expect(getMaxProfit(p5)).toEqual(-5);
    expect(getMaxProfit(p6)).toEqual(0);
  })

});  