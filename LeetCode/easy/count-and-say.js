'use strict';

function countAndSay(num) {
  if (num < 1 || num > 30) return '';
  let result = '1';  
  let int = 2;
  while (int <= num) {
    result = say(result);
    int++;
  }
  return result;
}

function say(str) {
  let answer = '';
  let count = 0;
  let num = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === num) {
      count++;
      continue;
    }
    answer = answer + count + str[i - 1];
    count = 1;
    num = str[i];
        
  }
  return answer + count + num;
}

module.exports = countAndSay;

