'use strict';

function arrayMath(arr) {
let results = {};
let sum = 0;
let min = arr[0];
let max = arr[0];


for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (arr[i] < min) {
    min = arr[i];
    continue;
  };
  if (arr[i] > max) {
    max = arr[i];
  }
};

results['sum'] = sum;
results['min'] = min;
results['max'] = max;
results['avg'] = parseFloat((sum/arr.length).toFixed(2));


return results;

}


module.exports = arrayMath;

console.log(arrayMath([4, 7, 9, 10]));
console.log(arrayMath([-4, -7, -9, -10]));
console.log(arrayMath([-9, 6, 200, 0, 75, 6]));
console.log(arrayMath([3]));
console.log(arrayMath([1, 2]));