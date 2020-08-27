'use strict';

function reverseCharacters(arr) {

  for (let i = 0; i < Math.floor((arr.length/2)); i++) {

    let temp = arr[i];
    arr[i] = arr[(arr.length - 1) - i ];
    arr[(arr.length - 1) - i ] = temp;
  }

  return arr;
};

function anotherReverse(arr) {

let left = 0;
let right = arr.length - 1;

while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  left ++;
  right --;
}

return arr;


}


module.exports =  {
  reverseCharacters,
  anotherReverse
}

let arr1 = ['a', 'b', '3', '5', '&'];
let arr2 = ['a', 'b', '3', '5', '&', 'k'];

console.log(anotherReverse(arr1));
console.log(anotherReverse(arr2));
console.log(anotherReverse(['m']));
console.log(anotherReverse(['a', 'b']));
