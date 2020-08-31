'use strict';

const anyIsPalindrome = require('./string-palindrome.js');

describe('Testing string is palindrome in any permutation', () => {
  it ('should whether or not the string is a palindrome in any permutation', () => {
    expect(anyIsPalindrome('ivicc')).toEqual(true);
    expect(anyIsPalindrome('livci')).toEqual(false);
    expect(anyIsPalindrome('civic')).toEqual(true);
    expect(anyIsPalindrome('civil')).toEqual(false);
    expect(anyIsPalindrome('omm')).toEqual(true);
    expect(anyIsPalindrome('tasts')).toEqual(true);
    expect(anyIsPalindrome('stats')).toEqual(true);
    expect(anyIsPalindrome('hannah')).toEqual(true);
    expect(anyIsPalindrome('ddeerr')).toEqual(true);
    expect(anyIsPalindrome('racecar')).toEqual(true);
    expect(anyIsPalindrome('purple')).toEqual(false);
    expect(anyIsPalindrome('a')).toEqual(true);
    expect(anyIsPalindrome('aa')).toEqual(true);
    expect(anyIsPalindrome('ab')).toEqual(false);
  });
});