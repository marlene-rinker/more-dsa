'use strict';

let Node = require('../../constructors/binary-tree-node.js');


function secondLargestInBST(root) {
  if(!root) return null;
  if(!root.left && !root.right) return null;
  if(!root.right) return root.left.value;
  let current = root;

  while(current.right) {
    if(current.right.right) {
      current = current.right;
      continue;
    }
    console.log('current.right.left is: ', current.right.left);
    if(current.right.left && current.right.left.right) {
      if(current.right.left.right.value > current.value) {
        current = current.right.left.right;
      }
      continue;
    }
    return current.value;
  }
  return current.value;

};


module.exports = secondLargestInBST;

let root = new Node(20);
let nodeB = new Node(10);
let nodeC = new Node(30);
let nodeD = new Node(5);
let nodeE = new Node(21);
let nodeF = new Node(25);
let nodeG = new Node(35);
let nodeH = new Node(33);
let nodeI = new Node(32);
let nodeJ = new Node(34);

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
nodeC.right = nodeG;
nodeG.left = nodeH;
nodeH.left = nodeI;
nodeH.right = nodeJ;

console.log(secondLargestInBST(root));