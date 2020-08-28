'use strict';

function reverseInteger(num) {

  num = num.toString();
  let neg = '';
  if(num[0] === '-') {
    neg = '-';
  }
  let newNum = '';

  for (let i = 0; i < num.length; i++) {
    newNum = num[i] + newNum;
  }
  num = parseInt(neg + newNum);
  return num;
};

console.log(reverseInteger(12));


module.exports = reverseInteger;