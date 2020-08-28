'use strict';

function mergeArrays(arr1, arr2) {

  let result = arr1.concat(arr2);
  for (let i = 1; i < result.length; i++) {
    let j = i -1;
    let temp = result[i];
    while (j >= 0 && temp < result[j]) {
      result[j + 1] = result[j];
      j = j - 1; 
    }
    result[j + 1] = temp;    
  }


  return result;
}

module.exports = mergeArrays;