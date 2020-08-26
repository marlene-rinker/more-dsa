'use strict';

function twoSum(nums, target) {

  let result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        return result;
      }
    }
  }
  return result;
};

module.exports = twoSum;

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([8, 2, -4, 2], 4));
console.log(twoSum([0, 8, -3, -2], -5));
console.log(twoSum([2, 8, 11, 25], 4));
