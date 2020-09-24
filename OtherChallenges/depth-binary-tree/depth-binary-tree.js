'use strict';

function Node(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}


function findDepth(root) {

  let result = findDepthHelper(root, 1);  

  return result;
}

function findDepthHelper(root, num) {

  if(root === null) {
    return 0;
  }

  if(root.left === null && root.right === null) {
    return num;
  }

  if(root.right !== null && root.left !== null) {
    return Math.max(findDepthHelper(root.right, num + 1), findDepthHelper(root.left, num + 1))
  }
  if (root.right !== null) {
    return Math.max(findDepthHelper(root.right, num + 1));
  }

  if (root.left !== null) {
    return Math.max(findDepthHelper(root.left, num + 1));
  }
};


module.exports = {
  Node,
  findDepth,
}
    