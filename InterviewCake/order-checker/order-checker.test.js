'use strict';

const orderChecker = require('./order-checker.js');

describe('Testing order checker', () => {
  it ('should return true if orders served as received', () => {
    let a1 = [1, 3, 5];
    let a2 = [2, 4, 6, 10, 20, 30];
    let s1 = [1, 2, 4, 6, 3, 5, 10, 20, 30];

    let a3 = [17, 8, 24];
    let a4 = [12, 19, 2];
    let s2 = [17, 8, 12, 19, 24, 2];

    let a5 = [];
    let a6 = [20, 30, 40];
    let s3 = [20, 30, 40];

    let a7 = [20, 30, 40];
    let a8 = [];
    let s4 = [20, 30, 40];
    
    expect(orderChecker(a1, a2, s1)).toEqual(true);
    expect(orderChecker(a3, a4, s2)).toEqual(true);
    expect(orderChecker(a5, a6, s3)).toEqual(true);
    expect(orderChecker(a7, a8, s4)).toEqual(true);
  })

  it ('should return false if orders not served as received', () => {
    let a1 = [17, 8, 24, 13, 25, 30, 100, 16, 22];
    let a2 = [12, 19, 2];
    let s1 = [17, 8, 12, 19, 24, 13, 2, 25, 30, 100, 22, 16];

    let a3 = [1, 3, 5];
    let a4 = [2, 4, 6];
    let s2 = [1, 2, 4, 6, 5, 3];

    let a5 = [];
    let a6 = [20, 30, 40];
    let s3 = [20, 40, 30];

    let a7 = [20, 30, 40];
    let a8 = [];
    let s4 = [20, 40, 30];
    
    expect(orderChecker(a1, a2, s1)).toEqual(false);
    expect(orderChecker(a3, a4, s2)).toEqual(false);
    expect(orderChecker(a5, a6, s3)).toEqual(false);
    expect(orderChecker(a7, a8, s4)).toEqual(false);
  })
});  