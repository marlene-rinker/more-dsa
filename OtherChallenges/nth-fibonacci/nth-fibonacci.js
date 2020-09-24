'use strict';


function findNthFibonacci(num) {
  if(num < 2) {
    return num;
  };

  let a = 0;
  let b = 1;
  let c = a + b;

  for (let i = 2; i < num; i++) {
     c = a + b;
     a = b;
     b = c;

  }

  return c;

}

module.exports = findNthFibonacci;

