'use strict';

const findArea = require('./find-area.js');

describe('Testing find area', () => {
  it ('should return the area', () => {
    expect(findArea([0,1], [1,0])).toEqual(1);
    expect(findArea([1,1], [2,0])).toEqual(1);
    expect(findArea([0,6], [6,0])).toEqual(36);
    expect(findArea([8,8], [20,0])).toEqual(96);
  })
});  