'use strict';

const countAndSay = require('./count-and-say.js');

describe('Testing count and say', () => {
  it ('should return the count and say sequence for the number', () => {
    expect(countAndSay(1)).toEqual('1');
    expect(countAndSay(2)).toEqual('11');
    expect(countAndSay(3)).toEqual('21');
    expect(countAndSay(4)).toEqual('1211');
    expect(countAndSay(5)).toEqual('111221');
    expect(countAndSay(10)).toEqual('13211311123113112211');
  })

  it ('should return an empty string if number is greater than 30 or less than 1', () => {
    expect(countAndSay(0)).toEqual('');
    expect(countAndSay(31)).toEqual('');
  })
});  