'use strict';



function areAnagrams(str1, str2) {
  //remove non-alphabet characters, convert to lowercase, split out the letters, sort them, then join them back together
  let first = str1.replace(/[^a-zA-z]+/g, '').toLowerCase().split('').sort().join('');
  let second = str2.replace(/[^a-zA-z]+/g, '').toLowerCase().split('').sort().join('');
  
  return first === second;


}

module.exports = areAnagrams;
