'use strict';

const test = require('./reverse-string.js');

describe('Testing reverse characters', () => {
  it ('should return the array with the characters reversed', () => {
    let arr1 = ['a', 'b', '3', '5', '&'];
    let arr2 = ['a', 'b', '3', '5', '&', 'k']
    
    expect(test.reverseCharacters(arr1)).toEqual([ '&', '5', '3', 'b', 'a' ]);
    expect(test.reverseCharacters(arr2)).toEqual([ 'k', '&', '5', '3', 'b', 'a' ]);
    expect(test.reverseCharacters(['m'])).toEqual([ 'm' ]);
    expect(test.reverseCharacters(['a', 'b'])).toEqual([ 'b', 'a' ]);
  })
});  

describe('Testing another way to reverse characters', () => {
  it ('should return the array with the characters reversed', () => {
    let arr1 = ['a', 'b', '3', '5', '&'];
    let arr2 = ['a', 'b', '3', '5', '&', 'k']
    
    expect(test.anotherReverse(arr1)).toEqual([ '&', '5', '3', 'b', 'a' ]);
    expect(test.anotherReverse(arr2)).toEqual([ 'k', '&', '5', '3', 'b', 'a' ]);
    expect(test.anotherReverse(['m'])).toEqual([ 'm' ]);
    expect(test.anotherReverse(['a', 'b'])).toEqual([ 'b', 'a' ]);
  })
});