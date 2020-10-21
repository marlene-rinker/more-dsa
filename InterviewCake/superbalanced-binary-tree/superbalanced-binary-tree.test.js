'use strict';

let isSuperbalanced = require('./superbalanced-binary-tree.js');
let Node = require('../../constructors/binary-tree-node.js');


describe('Testing superbalanced binary tree', () => {
  it ('should return false if tree is not superbalanced', () => {
    let root = new Node('A');
    let nodeB = new Node('B');
    let nodeC = new Node('C');
    let nodeD = new Node('D');
    let nodeE = new Node('E');
    let nodeF = new Node('F');
    let nodeG = new Node('G');
    let nodeH = new Node('H');
    let nodeI = new Node('I');
    let nodeJ = new Node('J');
    root.left = nodeB;
    root.right = nodeE;
    nodeB.left = nodeC;
    nodeB.right = nodeD;
    nodeE.left = nodeF;
    nodeE.right = nodeG;
    nodeF.left = nodeH;
    nodeH.left = nodeI;
    nodeH.right = nodeJ;

    expect(isSuperbalanced(root)).toEqual(false);
  })

  it ('should return true if tree is superbalanced', () => {
    let root = new Node('A');
    let nodeB = new Node('B');
    let nodeC = new Node('C');
    let nodeD = new Node('D');
    let nodeE = new Node('E');
    let nodeF = new Node('F');
    let nodeG = new Node('G');
    let nodeH = new Node('H');
    let nodeI = new Node('I');
    root.left = nodeB;
    root.right = nodeE;
    nodeB.left = nodeC;
    nodeB.right = nodeD;
    nodeE.left = nodeF;
    nodeE.right = nodeG;
    nodeG.left = nodeH;
    nodeG.right = nodeI;

    expect(isSuperbalanced(root)).toEqual(true);
  })
  it ('should return true if tree is superbalanced', () => {
    let root = new Node('A');

    expect(isSuperbalanced(root)).toEqual(true);
  })

  it ('should return true if no root', () => {
    let root = null;

    expect(isSuperbalanced(root)).toEqual(true);
  })

})