'use strict';

const test = require('./binary-tree.js');

describe('Testing non-recursive binary tree traversal', () => {
  it ('should return an array of values from the traversal', () => {
    let root = new test.Node(1);
    root.left = new test.Node(2);
    root.right = new test.Node(3);
    root.left.left = new test.Node(4);
    root.left.right = new test.Node(5);
    root.right.left = new test.Node(6);
    root.right.right = new test.Node(7);

    let one = new test.Node(1);
    
    expect(test.traverseBinaryTree(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
    expect(test.traverseBinaryTree(one)).toEqual([1]);
  })
});  