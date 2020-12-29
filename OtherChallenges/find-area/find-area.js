'use strict';

// const assert = require('assert').strict;

function findArea(topLeft, bottomRight) {
    let height = topLeft[1] - bottomRight[1];
    let length = bottomRight[0] - topLeft[0];
    let area = length * height;
    
  return area;  
}

module.exports = findArea;

// function main() {
//     console.log('main');
//     assert.equal(findArea([0,1], [1,0]), 1); // pass
//     assert.equal(findArea([1,1], [2,0]), 1); // pass
// }

// main();

console.log(findArea([0,1], [1,0]));
console.log(findArea([1,1], [2,0]));
console.log(findArea([0,6], [6,0]));
console.log(findArea([8,8], [20,0]));


