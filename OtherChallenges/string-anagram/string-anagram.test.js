'use strict';

const test = require('./string-anagram.js');;

describe('Testing if strings are anagrams', () => {
  it ('should return true if strings are anagrams', () => {

  
    expect(test.areAnagrams('cat', 'act')).toEqual(true);
    expect(test.areAnagrams('tar', 'rat')).toEqual(true);
    expect(test.areAnagrams('post', 'tops')).toEqual(true);
    expect(test.areAnagrams('top', 'pot')).toEqual(true);
    expect(test.areAnagrams('dormitory', 'dirty room')).toEqual(true);
    expect(test.areAnagrams('the eyes', 'they see')).toEqual(true);
  })

  it ('should return false if strings are not anagrams', () => {

  
    expect(test.areAnagrams('cat', 'dog')).toEqual(false);
    expect(test.areAnagrams('tarp', 'rat')).toEqual(false);
    expect(test.areAnagrams('pot', 'tops')).toEqual(false);
    expect(test.areAnagrams('gym', 'gypsy')).toEqual(false);
    expect(test.areAnagrams('dormitory', 'dorm room')).toEqual(false);
    expect(test.areAnagrams('the eyes', 'are blue')).toEqual(false);
  })
});  

describe('Testing if strings are anagrams using character maps', () => {
  it ('should return true if strings are anagrams', () => {

  
    expect(test.anotherAreAnagrams('cat', 'act')).toEqual(true);
    expect(test.anotherAreAnagrams('tar', 'rat')).toEqual(true);
    expect(test.anotherAreAnagrams('post', 'tops')).toEqual(true);
    expect(test.anotherAreAnagrams('top', 'pot')).toEqual(true);
    expect(test.anotherAreAnagrams('dormitory', 'dirty room')).toEqual(true);
    expect(test.anotherAreAnagrams('the eyes', 'they see')).toEqual(true);
  })

  it ('should return false if strings are not anagrams', () => {

  
    expect(test.anotherAreAnagrams('cat', 'dog')).toEqual(false);
    expect(test.anotherAreAnagrams('tarp', 'rat')).toEqual(false);
    expect(test.anotherAreAnagrams('pot', 'tops')).toEqual(false);
    expect(test.anotherAreAnagrams('gym', 'gypsy')).toEqual(false);
    expect(test.anotherAreAnagrams('dormitory', 'dorm room')).toEqual(false);
    expect(test.anotherAreAnagrams('the eyes', 'are blue')).toEqual(false);
  })
});