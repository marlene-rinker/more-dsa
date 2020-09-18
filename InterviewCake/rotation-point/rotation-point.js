'use strict';

function findRotationPoint(arr) {
  let result = -1;

  //rotation point is where arr[idx] < arr[idx - 1]

  //is arr[0] > arr[idx], if so, then rotation point is between arr[0] and arr[idx]; if not, then rotation point is between arr[idx] and arr.length - 1;

  let start = -1;
  let end = arr.length;

  while(start + 1 < end) {
    let range = end - start;
    let middle = Math.floor(range/2);
    let idx = start + middle;

    if(arr[idx] < arr[idx - 1]) {
      return idx;
    }

    if(arr[start] > arr[idx]) {
      end = idx;
      continue;
    }
    start = idx;
    

  };


  return result;
};

module.exports = findRotationPoint;
