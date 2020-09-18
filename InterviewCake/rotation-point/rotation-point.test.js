'use strict';


const findRotationPoint = require ('./rotation-point.js');

describe('Testing find rotation point', () => {
  it ('should return the index of the rotation point in the array', () => {
    expect(findRotationPoint(['x','y','z','a','b','c'])).toEqual(3);
    expect(findRotationPoint(['dog', 'elephant', 'hippo', 'zebra', 'alligator', 'ape', 'buffalo', 'cat'])).toEqual(4);
    expect(findRotationPoint(['v','w','x','y','z','a'])).toEqual(5);
    expect(findRotationPoint(['a','b','c'])).toEqual(0);
  });
});