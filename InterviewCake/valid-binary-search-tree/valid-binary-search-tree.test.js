'use strict';

let isValidBST = require('./valid-binary-search-tree.js');
let Node = require('../../constructors/binary-tree-node.js');


describe('Testing valid binary search tree', () => {
  it ('should return true if tree is a binary search tree', () => {
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

    expect(isValidBST(root)).toEqual(true);
  });

  it ('should return false if tree isn\'t a binary search tree', () => {
    let root = new Node(20);
    let nodeB = new Node(10);
    let nodeC = new Node(30);
    let nodeD = new Node(5);
    let nodeE = new Node(21);
    let nodeF = new Node(25);
    let nodeG = new Node(35);

    root.left = nodeB;
    root.right = nodeC;
    nodeB.left = nodeD;
    nodeB.right = nodeE;
    nodeC.left = nodeF;
    nodeC.right = nodeG;

    expect(isValidBST(root)).toEqual(false);
  });

  it ('should return false if tree isn\'t a binary search tree', () => {
    let root = new Node(20);
    let nodeB = new Node(10);
    let nodeC = new Node(30);
    let nodeD = new Node(5);
    let nodeE = new Node(15);
    let nodeF = new Node(31);
    let nodeG = new Node(35);

    root.left = nodeB;
    root.right = nodeC;
    nodeB.left = nodeD;
    nodeB.right = nodeE;
    nodeC.left = nodeF;
    nodeC.right = nodeG;

    expect(isValidBST(root)).toEqual(false);
  });

  it ('should return false if tree isn\'t a binary search tree', () => {
    let root = new Node(20);

    expect(isValidBST(root)).toEqual(false);
  });

  it ('should return false if tree isn\'t a binary search tree', () => {
    let root = null;

    expect(isValidBST(root)).toEqual(false);
  });
});
