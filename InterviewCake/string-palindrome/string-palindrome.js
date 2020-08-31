'use strict';

//every letter should have a match (even number of them) except 1

//go through the string, put each letter in a set, when find a match, remove it from the set, if no match, put it in the set, if set has one letter at the end, return true, else return false


function anyIsPalindrome(str) {

  let noMatch = new Set();

  for(let i = 0; i < str.length; i++) {
    if(noMatch.has(str[i])) {
      noMatch.delete(str[i]);
    } else {
      noMatch.add(str[i]);
    }
  }
  console.log(noMatch.size);
  if(noMatch.size === 1 || noMatch.size === 0) {
    return true;
  }

  return false;
}

module.exports = anyIsPalindrome;

console.log(anyIsPalindrome('ivicc'));//true
console.log(anyIsPalindrome('livci'));//false
console.log(anyIsPalindrome('civic'));//true
console.log(anyIsPalindrome('civil'));//false
console.log(anyIsPalindrome('omm'));//true
console.log(anyIsPalindrome('tasts'));//true
console.log(anyIsPalindrome('stats'));//true
console.log(anyIsPalindrome('hannah'));//true
console.log(anyIsPalindrome('ddeerr'));//true
console.log(anyIsPalindrome('racecar'));//true
console.log(anyIsPalindrome('purple'));//false
