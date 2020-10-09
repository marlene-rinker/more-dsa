'use strict';

function isSuperbalanced(root) {
//use depth-first traversal to find the leaves (nodes with no children);
//count to get depth to leaf
//when get to first leaf, save depth, then compare to depth of next leaf, if more than 1, return false, if not, keep going keeping minimum depth as the depth to compare for next leaf

if(!root) {
  return false;
}

let stack = [];
stack.push(root);


while(stack.length > 0) {
  let node = stack.pop();

  if(node.left) {
    stack.push(node.left);
  }

  if(node.right) {
    stack.push(node.right);
  }

  if(!node.right && !node.left) {
    if ((depth - count) > 1) {
      return false;
    }
  }

}





}