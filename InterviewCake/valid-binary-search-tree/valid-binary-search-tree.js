'use strict';

let Node = require('../../constructors/binary-tree-node.js');

function isValidBST(root) {
  if(!root) {return false};

  if(!root.left && !root.right) {return false};

  let stack = [];
  stack.push({
    node: root,
    low: -100000000000000000000,
    high: 100000000000000000000,
  });


  while(stack.length) {
    let current = stack.pop();
    if (current.node.value <= current.low || current.node.value >= current.high) {
      return false;
    }
    if(current.node.left) {
      stack.push({
        node: current.node.left,
        low: current.low,
        high: current.node.value,
      });
    }

    if(current.node.right) {
      stack.push({
        node: current.node.right,
        low: current.node.value,
        high: current.high,
      });
    }

  }

  return true;

}

module.exports = isValidBST;

