'use strict';

const areAnagrams = require('./string-anagram.js');;

describe('Testing if strings are anagrams', () => {
  it ('should return true if strings are anagrams', () => {

  
    expect(areAnagrams('cat', 'act')).toEqual(true);
    expect(areAnagrams('tar', 'rat')).toEqual(true);
    expect(areAnagrams('post', 'tops')).toEqual(true);
    expect(areAnagrams('top', 'pot')).toEqual(true);
    expect(areAnagrams('dormitory', 'dirty room')).toEqual(true);
    expect(areAnagrams('the eyes', 'they see')).toEqual(true);
  })

  it ('should return false if strings are not anagrams', () => {

  
    expect(areAnagrams('cat', 'dog')).toEqual(false);
    expect(areAnagrams('tarp', 'rat')).toEqual(false);
    expect(areAnagrams('pot', 'tops')).toEqual(false);
    expect(areAnagrams('gym', 'gypsy')).toEqual(false);
    expect(areAnagrams('dormitory', 'dorm room')).toEqual(false);
    expect(areAnagrams('the eyes', 'are blue')).toEqual(false);
  })
});  