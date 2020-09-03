'use strict';

const topScores = require('./top-scores.js');

describe('Testing top scores', () => {
  it ('should return array with the top scores sorted', () => {
    let arr = [37, 89, 41, 65, 91, 53];
    let arr2 = [37, 89, 41, 65, 65, 91, 100, 100, 53, 0];

    expect(topScores(arr, 100)).toEqual([91, 89, 65, 53, 41, 37]);
    expect(topScores(arr2, 100)).toEqual([100, 100, 91, 89, 65, 65, 53, 41, 37, 0]);
  })
}); 