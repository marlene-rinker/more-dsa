'use strict';

let isSecondLargest = require('./second-largest-in-bst.js');
let Node = require('../../constructors/binary-tree-node.js');


describe('Testing finding second largest number in a binary search tree', () => {
  it ('should return second largest number in a binary search tree', () => {
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

    expect(isSecondLargest(root)).toEqual(30);
  });

  it ('should return second largest number in a binary search tree', () => {
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

    expect(isSecondLargest(root)).toEqual(34);
  });

  it ('should return second largest number in a binary search tree', () => {
    let root = new Node(100);
    let nodeB = new Node(50);
    let nodeC = new Node(1000);
    let nodeD = new Node(500);
    let nodeE = new Node(2000);
    let nodeF = new Node(1500);
    let nodeG = new Node(1200);
    let nodeH = new Node(1600);
    let nodeI = new Node(1550);
    let nodeJ = new Node(1620);
    let nodeK = new Node(1520);
    let nodeL = new Node(1570);

    root.left = nodeB;
    root.right = nodeC;
    nodeC.left = nodeD;
    nodeC.right = nodeE;
    nodeE.left = nodeF;
    nodeF.left = nodeG;
    nodeF.right = nodeH;
    nodeH.left = nodeI;
    nodeH.right = nodeJ;
    nodeI.left = nodeK;
    nodeI.right = nodeL;

    expect(isSecondLargest(root)).toEqual(1620);
  });

  it ('should return null if root is null', () => {
    let root = null;    
    expect(isSecondLargest(root)).toEqual(null);
  });

  it ('should return null if root doesn\'t have left or right nodes', () => {
    let root = new Node(20);    
    expect(isSecondLargest(root)).toEqual(null);
  });
});