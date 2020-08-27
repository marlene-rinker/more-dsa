'use strict';

const reverseWords = require('./reverse-words.js');

describe('Testing reversing words', () => {
  it ('should return the array with the words reversed', () => {
    let arr1 = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];
    let arr2 = ['h', 'e', 'l', 'l', 'o'];
    let arr3 = ['h', 'i', ' ', 't', 'h', 'e', 'r', 'e'];
    let arr4 = ['m', ' ', 's'];
    
    expect(reverseWords(arr1)).toEqual([
      's', 't', 'e', 'a',
      'l', ' ', 'p', 'o',
      'u', 'n', 'd', ' ',
      'c', 'a', 'k', 'e'
    ]);
    expect(reverseWords(arr2)).toEqual([ 'h', 'e', 'l', 'l', 'o' ]);
    expect(reverseWords(arr3)).toEqual([
      't', 'h', 'e',
      'r', 'e', ' ',
      'h', 'i'
    ]);
    expect(reverseWords(arr4)).toEqual([ 's', ' ', 'm' ]);
  });
});