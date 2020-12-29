'use strict';

const findNthFib = require('./nth-fibonacci-ic.js');

describe('Testing reverse linked list', () => {
  it ('should return the reversed linked list', () => {

    expect(findNthFib(0)).toEqual(0);
    expect(findNthFib(1)).toEqual(1);
    expect(findNthFib(2)).toEqual(1);
    expect(findNthFib(3)).toEqual(2);
    expect(findNthFib(4)).toEqual(3);
    expect(findNthFib(5)).toEqual(5);
    expect(findNthFib(6)).toEqual(8);
    expect(findNthFib(7)).toEqual(13);
    expect(findNthFib(8)).toEqual(21);
    expect(findNthFib(9)).toEqual(34);
    
  })
});  