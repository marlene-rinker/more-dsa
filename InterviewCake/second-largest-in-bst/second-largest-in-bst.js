'use strict';

let Node = require('../../constructors/binary-tree-node.js');

function findLargestInBST(root) {
  let current = root;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}


function secondLargestInBST(root) {
  if(!root) return null;
  if(!root.left && !root.right) return null;
  let current = root;

  while(current) {
    if (current.left && !current.right) {
      return findLargestInBST(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
    current = current.right;
  }

};

module.exports = secondLargestInBST;
