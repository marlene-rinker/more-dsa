'use strict';

function shuffleArray(arr) {

  let used = {};
  let max = arr.length - 1;

  for(let i = 0; i < arr.length; i++) {
    let idx = getRandom(0, max);
    while (Object.values(used).includes(idx)) {
      idx = getRandom(0, max);
    }
    used[idx] = idx;
    let temp = arr.splice(idx, 1);
    arr.unshift(temp[0]);
    
  }
  return arr;
}

function betterShuffle(arr) {
  if(arr.length <= 1) return arr;

  let max = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let idx = getRandom(i, max);

    if(idx !== i) {
      let temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }
  return arr;
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

module.exports = {
  betterShuffle,
  shuffleArray,
}

