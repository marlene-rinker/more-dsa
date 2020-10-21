'use strict';
let tool = require('../../constructors/linked-list.js');
let hasCircularRef = require('./ll-circular-reference.js');

describe('Testing circular reference in linked list', () => {
  it ('should return true if has a circular reference', () => {
    let node1 = new tool.Node(1);
    let node2 = new tool.Node(2);
    let node3 = new tool.Node(3);    
    node1.next = node2;
    node2.next = node3;
    node3.next = node2;
    let myList = new tool.LinkedList();
    myList.head = node1;

    expect(hasCircularRef(myList)).toEqual(true);   

  })

  it ('should return false if it doesn\'t have a circular reference', () => {
    let node1 = new tool.Node(1);
    let node2 = new tool.Node(2);
    let node3 = new tool.Node(3); 
    let node4 = new tool.Node(4);   
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    let myList = new tool.LinkedList();
    myList.head = node1;

    expect(hasCircularRef(myList)).toEqual(false);   

  })

  it ('should return false if it doesn\'t have a circular reference', () => {
    let node5 = new tool.Node(5);
    let shortList = new tool.LinkedList();
    shortList.head = node5;

    expect(hasCircularRef(shortList)).toEqual(false);
  })

  it ('should return false if it doesn\'t have a circular reference', () => {
    let emptyList = new tool.LinkedList();
    expect(hasCircularRef(emptyList)).toEqual(false);
  })
})