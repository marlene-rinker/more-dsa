'use strict';

const houseRobber = require('./house-robber.js');

describe('Testing house robber', () => {
  it ('should return the max money you can rob', () => {
    expect(houseRobber([1,2,3,1])).toEqual(4);
    expect(houseRobber([2,7,9,3,1])).toEqual(12);
    expect(houseRobber([3])).toEqual(3);
    expect(houseRobber([3,4])).toEqual(4);
    expect(houseRobber([1,3,3,1])).toEqual(4);
    expect(houseRobber([2,70,9,3,1])).toEqual(73);
    expect(houseRobber([1,9,9,8,4,3])).toEqual(20);
    expect(houseRobber([1,5,9,4,2,20,3,7])).toEqual(37);
    expect(houseRobber([])).toEqual(0);
    expect(houseRobber()).toEqual(0);
  })

});  