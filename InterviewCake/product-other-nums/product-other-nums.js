'use strict';


function productOtherNums(arr) {

  if(arr.length < 2) {return 'array must contain at least 2 numbers'};

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for(let j = 0; j < arr.length; j++) {
      if(j != i) {
        prod = prod * arr[j];
      }
    }
    result.push(prod);

  }

  return result;

}

function anotherProdOtherNums(arr) {
  if(arr.length < 2) {return 'array must contain at least 2 numbers'};
  let result = [];

  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = prod;
    prod = prod * arr[i];
  }

  prod = 1;
  for (let j = arr.length -1; j >=0; j--) {
    result[j] = result[j] * prod;
    prod = prod * arr[j];
  }
  return result;

}

module.exports = {
  productOtherNums,
  anotherProdOtherNums,
}


