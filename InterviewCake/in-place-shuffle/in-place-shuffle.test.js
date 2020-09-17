'use strict';

const test = require('./in-place-shuffle.js');

describe('Testing in place shuffle of array', () => {
  it ('should return a shuffled array', () => {    
    expect(test.shuffleArray([1,2,3,4,5,6])).not.toEqual([1,2,3,4,5,6]);
    expect(test.shuffleArray(['apple', 'banana', 'blueberry', 'strawberry'])).not.toEqual(['apple', 'banana', 'blueberry', 'strawberry']);
    expect(test.betterShuffle([1,2,3,4,5,6])).not.toEqual([1,2,3,4,5,6]);
    expect(test.betterShuffle(['apple', 'banana', 'blueberry', 'strawberry'])).not.toEqual(['apple', 'banana', 'blueberry', 'strawberry']);
    })

  it ('should return the array if it has less than 2 items', () => {    
    expect(test.shuffleArray([1])).toEqual([1]);
    expect(test.shuffleArray([])).toEqual([]);
    expect(test.betterShuffle([1])).toEqual([1]);
    expect(test.betterShuffle([])).toEqual([]);
    })
});  