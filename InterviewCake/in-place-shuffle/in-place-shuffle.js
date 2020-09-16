'use strict';

function shuffleArray(arr) {

  let used = {};
  let max = arr.length - 1;

  for(let i = 0; i < arr.length; i++) {
    let idx = getRandom(0, max);
    while (Object.values(used).includes(idx)) {
      console.log('in the while: ', idx);
      idx = getRandom(0, max);
    }
    used[idx] = idx;
    let temp = arr.splice(idx, 1);
    arr.unshift(temp[0]);
    console.log(used);
  }
  return arr;
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// console.log(getRandom(0,3));
console.log(shuffleArray([1,2,3,4]));