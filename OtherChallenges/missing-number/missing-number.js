'use strict';

//given an array - from 1 to n; not sorted, need to find n and what number is missing in the sequence

function findMissing(arr) {

  //sort the array
  //get the length - 1 for "n";
  //check which number is missing
  let n = arr.length -1;

  

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while(j >=0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  let missingNum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] + 1 !== arr[i + 1]) {
      missingNum = arr[i] + 1;
      return `${missingNum} is the missing number`;
    }
  }


  return 'no missing number';
}

module.exports = findMissing;

console.log(findMissing([3, 7, 1, 2, 8, 4, 5]));
console.log(findMissing([4, 9, 1, 5, 8, 6, 7, 3, 10]));
console.log(findMissing([1, 2, 3, 4, 6, 7, 8, 9]));
console.log(findMissing([9, 8, 6, 5, 4, 3, 2, 1]));
console.log(findMissing([3, 7, 1, 2, 8, 4, 5, 6]));