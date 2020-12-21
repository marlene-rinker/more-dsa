'use strict';

const notRepeated = require('./first-nonrepeat.js');

describe('Testing find first non repeated character', () => {
  it ('should return first non repeated character', () => {
    expect(notRepeated('Test')).toEqual('T');
    expect(notRepeated('s')).toEqual('s');
    expect(notRepeated('test')).toEqual('e');
    expect(notRepeated('t12t')).toEqual('1');
    expect(notRepeated('u!u4%')).toEqual('!');
  })

  it ('should return null if no first non repeated character', () => {
    expect(notRepeated('')).toEqual(null);
    expect(notRepeated('ttt')).toEqual(null);
    expect(notRepeated('t11t')).toEqual(null);
  })
});  