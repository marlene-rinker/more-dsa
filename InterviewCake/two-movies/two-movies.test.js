'use strict';

const test = require('./two-movies.js');

describe('Testing two movies', () => {
  it ('should return true if two movie lengths add up to flight length', () => {
    let a1 = [120, 60, 130, 90, 85];
    let a2 = [60, 60, 60, 60];

    expect(test.twoMovies(150, a1)).toEqual(true);
    expect(test.moreTwoMovies(150, a1)).toEqual(true);
    expect(test.twoMovies(130, a1)).toEqual(false);
    expect(test.moreTwoMovies(130, a1)).toEqual(false);
    expect(test.twoMovies(120, a2)).toEqual(true);
    expect(test.moreTwoMovies(120, a2)).toEqual(true);
  })
}); 