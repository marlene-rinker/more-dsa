'use strict';

const longestCommonPrefix = require('./common-prefix.js');

describe('Testing find longest common prefix', () => {
  it ('should return the longest common prefix', () => {
    expect(longestCommonPrefix(['test', 'terror', 'tea', 'telephone'])).toEqual('te');
    expect(longestCommonPrefix(['cat', 'rat', 'bat'])).toEqual('');
    expect(longestCommonPrefix([])).toEqual('');
    expect(longestCommonPrefix(['blue'])).toEqual('blue');
    expect(longestCommonPrefix(['air', 'airport', 'airplane', 'airbus'])).toEqual('air');
    expect(longestCommonPrefix(['test', 'terror', 'tea', 6])).toEqual('');

  })
});  