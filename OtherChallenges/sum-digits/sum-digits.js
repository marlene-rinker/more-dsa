'use strict';

function sumInteger(int) {
  let num = int.toString();
  if (num.length === 1) {return parseInt(num)};
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    let num2 = parseInt(num[i]);
    result = num2 + result;
  };

  if (result > 9) {
    result = sumInteger(result);
    // return sumInteger(result);
  }

  return result;
}

module.exports = sumInteger;

