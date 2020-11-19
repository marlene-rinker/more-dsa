'use strict';

function longestCommonPrefix(arr) {
  let prefix = '';
  let first = arr[0];
  if(!arr.length) return prefix;
  if(arr.length === 1) {
    prefix = first;
    return prefix;
  }
  let position = 0;
  while (position < first.length) {
    let letter = first[position];
  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][position] !== letter) {
          return prefix;
        }
      }

    prefix = prefix + letter;
    position++;

  }
  return prefix;

}

module.exports=longestCommonPrefix;



