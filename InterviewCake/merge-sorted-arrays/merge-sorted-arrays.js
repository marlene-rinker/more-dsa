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

function mergeSortedArrays(arr1, arr2) {
  //we know the two arrays are sorted already

  let result = [];

  let arr1Index = 0;
  let arr2Index = 0;
  let resultIndex = 0;

  while(arr1Index < arr1.length && arr2Index < arr2.length) {
    if(arr1[arr1Index] < arr2[arr2Index]) {
      result[resultIndex] = arr1[arr1Index];
      arr1Index ++;
      resultIndex++;
      continue;
    }
    result[resultIndex] = arr2[arr2Index];
    arr2Index ++;
    resultIndex ++;
  };

  if(arr1Index !== arr1.length) {
    result = result.concat(arr1.slice(arr1Index));
  };

  if(arr2Index !== arr2.length) {
    result = result.concat(arr2.slice(arr2Index));
  }

  return result;
};
const a1 = [3, 4, 6, 10, 11, 15];
const a2 = [1, 5, 8, 12, 14, 19];
const a3 = [2,15, 18];
const a4 = [4];

// console.log(anotherMerge(a1, a2))
console.log(mergeSortedArrays(a3, a4))

module.exports = {
  mergeArrays,
  mergeSortedArrays,
}