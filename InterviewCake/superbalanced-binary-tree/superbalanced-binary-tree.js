'use strict';

let Node = require('../../constructors/binary-tree-node.js');

function isSuperbalanced(root) {

if(!root) {
  return true;
}

let stack = [];
stack.push([root, 0]);
let depths = [];

while(stack.length > 0) {
  let nodeDetails = stack.pop();
  let node = nodeDetails[0];
  let depth = nodeDetails[1];

  if(!node.right && !node.left) {
    if (depths.indexOf(depth) < 0) {
      depths.push(depth);
    }
    //tree is not superbalanced if there are more than 2 different depths or if the difference between the depths of two leaves is more than 1
    if ((depths.length > 2) || (Math.abs(depths[0] - depths[1]) > 1)) {
      return false;
    }
  }

  if(node.left) {
    stack.push([node.left, depth + 1]);
  }

  if(node.right) {
    stack.push([node.right, depth + 1]);
  }

}

return true;

}

module.exports = isSuperbalanced;