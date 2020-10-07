'use strict';

function findDuplicate(arr) {
  let nums = {};
  if (arr.length < 2) {return 'No duplicate'};
  
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (nums[val]) {
      return val + ' is a duplicate';
    }
    nums[val] = val;
  }

  return 'No duplicate';

}

module.exports = findDuplicate;

let arr1 = [1,2,3,1,4,5];
let arr2 = [];
let arr3 = [1];
let arr4 = [100, 101, 102, 103, 104, 105];
let arr5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,3,14];
let arr6 = [1,2,3,1000,4,5,1000,6,7,1000,8,9];


console.log(findDuplicate(arr1));
console.log(findDuplicate(arr2));
console.log(findDuplicate(arr3));
console.log(findDuplicate(arr4));
console.log(findDuplicate(arr5));
console.log(findDuplicate(arr6));