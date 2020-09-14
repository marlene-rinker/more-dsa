'use strict';

function highestProduct(arr) {
  if (arr.length < 3) {return 'array must contain at least 3 numbers'};
  
  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);

  let highProd2 = lowest * highest;
  let lowProd2 = lowest * highest;
  let result = arr[0] * arr[1] * arr[2];

  for(let i = 2; i < arr.length; i++) {
    let current = arr[i];
    result = Math.max(result, current * highProd2, current * lowProd2);
    highProd2 = Math.max(highProd2, current * highest, current * lowest);
    lowProd2 = Math.min(lowProd2, current * highest, current * lowest);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }


  return result;
}

module.exports = highestProduct;