'use strict';

const rotOranges = require('./oranges-matrix.js');

describe('Testing rot oranges matrix', () => {
  it ('should return unit time to rot all oranges in matrix (-1 if cannot do it)', () => {
    let o1 = [
      [2, 1, 0, 2, 1],
      [1, 0, 1, 2, 1],
      [1, 0, 0, 2, 1],
    ];
    let o2 = [
      [2, 1, 0, 2, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 2, 1],
    ];
    let o3 = [
      [2, 1, 0, 2, 1],
      [1, 0, 1, 2, 1],
      [1, 1, 0, 2, 1],
    ];

    let o4 = [
      [0,2],
    ];
    
    
    expect(rotOranges(o1)).toEqual(2);
    expect(rotOranges(o2)).toEqual(-1);
    expect(rotOranges(o3)).toEqual(3);
    expect(rotOranges(o4)).toEqual(0);
  

  })
});  