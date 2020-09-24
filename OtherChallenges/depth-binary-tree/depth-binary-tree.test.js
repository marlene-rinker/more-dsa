'use strict';


const test = require('./depth-binary-tree.js');


describe('Testing finding depth of binary tree', () => {
  it ('should return the depth of the binary tree', () => {
    let n7 = new test.Node(7);
    let n6 = new test.Node(6, n7);
    let n5 = new test.Node(5, n6);
    let n2 = new test.Node(2, n5); 
    let n3 = new test.Node(3);
    let n4 = new test.Node(4);   
    let n1 = new test.Node(1, n3, n4);
    let root = new test.Node(10, n1, n2);
    

    let one = new test.Node(1);

    let n60 = new test.Node(6);
    let n50 = new test.Node(5);
    let n20 = new test.Node(2, n50, n60);
    let n30 = new test.Node(3);
    let n40 = new test.Node(4);   
    let n10 = new test.Node(1, n30, n40);
    let root1 = new test.Node(10, n10, n20);

    let noRoot = null;

    let n41 = new test.Node(41);
    let n31 = new test.Node(31, null, n41);
    let n21 = new test.Node(21, null, n31);
    let n11 = new test.Node(11);
    let root2 = new test.Node(10, n11, n21);


    let n52 = new test.Node(52);
    let n42 = new test.Node(42, n52, null);
    let n32 = new test.Node(32, n42, null);
    let n22 = new test.Node(22, n32, null);
    let n12 = new test.Node(12);
    let root3 = new test.Node(10, n22, n12);
    

    expect(test.findDepth(root)).toEqual(5);
    expect(test.findDepth(one)).toEqual(1);
    expect(test.findDepth(root1)).toEqual(3);
    expect(test.findDepth(noRoot)).toEqual(0);
    expect(test.findDepth(root2)).toEqual(4);
    expect(test.findDepth(root3)).toEqual(5);

  })



})