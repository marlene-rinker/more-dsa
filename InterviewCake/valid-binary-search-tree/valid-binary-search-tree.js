'use strict';

let Node = require('../../constructors/binary-tree-node.js');

function isValidBST(root) {
  if(!root) {return false};

  if(!root.left && !root.right) {return false};

  let current = root;
  let queue = [];
  queue.push(current);


  while(queue.length) {
    let max = current.value;
    console.log('this is max: ', max);
    current = queue.shift();
    if(current.left) {
      if (current.left.value >= current.value) {
        return false;
      }
      queue.push(current.left);
    }

    if(current.right) {
      if ((current.right.value <= current.value) || (current.right.value >= max)) {
        return false;
      }
      queue.push(current.right);
    }


  }

  return true;

}

module.exports = isValidBST;


let root = new Node(20);
let nodeB = new Node(10);
let nodeC = new Node(30);
let nodeD = new Node(5);
let nodeE = new Node(15);
let nodeF = new Node(25);
let nodeG = new Node(35);

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
nodeC.right = nodeG;

console.log(isValidBST(root));