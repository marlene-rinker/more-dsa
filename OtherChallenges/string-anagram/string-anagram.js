'use strict';

//helper functions

function formatString(str) {
  if(!str) {
    return;
  }
  return str.replace(/[^a-zA-z]+/g, '').toLowerCase();
}

function alphabetizeString(str) {
  if(!str) {
    return;
  }
  return str.split('').sort().join('');
}

function characterMap(word) {
  if(!word) {
    return;
  }
  let charMap = {};
  for(let i in word) {
    let letter = word[i];

    if(charMap[letter]) {
      charMap[letter] =+1;
    } else {
      charMap[letter] = 1;
    }
  }
  return charMap;
}

//using string comparison
function areAnagrams(str1, str2) {
  
  let first = formatString(str1);
  let second = formatString(str2);
  first = alphabetizeString(first);
  second = alphabetizeString(second);
  
  return first === second;

};

//using character map
function anotherAreAnagrams(str1, str2) {

  str1 = formatString(str1);
  str2 = formatString(str2);
  
  if (str1.length !== str2.length) {
    return false;
  }
  let firstMap = characterMap(str1);
  let secondMap = characterMap(str2);

  for (let char in firstMap) {
    if (firstMap[char] !== secondMap[char]) {
      return false;
    }
  }

  return true;

}

module.exports = {
  areAnagrams,
  anotherAreAnagrams,
}

