'use strict';

function reverseWords(arr) {

  reverseCharacters(arr, 0, arr.length-1);

  let wordStart = 0;
  for(let i = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] === ' ') {
      reverseCharacters(arr, wordStart, i - 1);
      wordStart = i + 1;
    }
  }


  return arr;
};

function reverseCharacters(arr, start, end) {

  let left = start;
  let right = end;
  
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  
    left ++;
    right --;
  }
};

module.exports = reverseWords;

let array = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];
let arr1 = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];
let arr2 = ['h', 'e', 'l', 'l', 'o'];
let arr3 = ['h', 'i', ' ', 't', 'h', 'e', 'r', 'e'];
let arr4 = ['m', ' ', 's'];

console.log(reverseWords(arr1));
console.log(reverseWords(arr2));
console.log(reverseWords(arr3));
console.log(reverseWords(arr4));
