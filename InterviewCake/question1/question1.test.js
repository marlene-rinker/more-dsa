'use strict';

const mergeRanges = require('./question1.js');

describe('Testing merge ranges', () => {
  it ('should return the array with the merged values as expected', () => {
    let array = [{startTime: 1, endTime: 3}, {startTime: 5, endTime: 10}, {startTime: 4, endTime: 6}]

let array2 =   [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

let array3 = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]

let array4 = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

let array5 = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]
    expect(mergeRanges(array)).toEqual([ { startTime: 1, endTime: 3 }, { startTime: 4, endTime: 10 } ]);
    expect(mergeRanges(array2)).toEqual([
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 }
    ]);
    expect(mergeRanges(array3)).toEqual([ { startTime: 1, endTime: 3 } ]);
    expect(mergeRanges(array4)).toEqual([ { startTime: 1, endTime: 5 } ]);
    expect(mergeRanges(array5)).toEqual([ { startTime: 1, endTime: 10 } ]);
  })
});  