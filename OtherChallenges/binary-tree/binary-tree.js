'use strict';

function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}
//needs more work - blows up.
function traverseBinaryTree(root) {
  let stack = [];
  let result = [];

  let current = root;
  while(true) {
    while(current){
      stack.push(current);
      current = current.left;
    }
    if (stack.length === 0) {
      break;
    }

    let lastCurrent = stack.pop();
    result.push(lastCurrent.value);
    current = lastCurrent.right;


  }    

  return result;
}

module.exports = {
  Node,
  traverseBinaryTree,
}

  