'use strict';

const tool = require('../../constructors/linked-list.js');
const isPalindrome = require('./ll-palindrome.js');

describe('Testing doubly linked list is palindrome', () => {
  it ('should return true if it is a palindrome - even number of nodes', () => {
    let node1 = new tool.DoubleNode('T');
    let node2 = new tool.DoubleNode('o');
    let node3 = new tool.DoubleNode('o');  
    let node4 = new tool.DoubleNode('t');  
    node1.next = node2;
    node2.next = node3;
    node2.prev = node1;
    node3.next = node4;
    node3.prev = node2;
    node4.prev = node3;
    let myList = new tool.LinkedList();
    myList.head = node1;

    expect(isPalindrome(myList)).toEqual(true);   

  })

  it ('should return true if it is a palindrome - odd number of nodes', () => {
    let node5 = new tool.DoubleNode('c');
    let node6 = new tool.DoubleNode('i');
    let node7 = new tool.DoubleNode('v');  
    let node8 = new tool.DoubleNode('i');
    let node9 = new tool.DoubleNode('c')  
    node5.next = node6;
    node6.next = node7;
    node6.prev = node5;
    node7.next = node8;
    node7.prev = node6;
    node8.next = node9;
    node8.prev = node7;
    node9.prev = node8;
    let oddList = new tool.LinkedList();
    oddList.head = node5;

    expect(isPalindrome(oddList)).toEqual(true);   

  })

  it ('should return true if it has one node', () => {
    let node10 = new tool.DoubleNode(1);
    let oneList = new tool.LinkedList();
    oneList.head = node10;

    expect(isPalindrome(oneList)).toEqual(true);   

  })

  it ('should return true if it is a palindrome - two nodes', () => {
    let node11 = new tool.DoubleNode('a');
    let node12 = new tool.DoubleNode('a');
    node11.next = node12;
    node12.prev = node11;
    let twoList = new tool.LinkedList();
    twoList.head = node11;

    expect(isPalindrome(twoList)).toEqual(true);   

  })

  it ('should return false if it isn\'t a palindrome - even number of nodes', () => {
    let node1 = new tool.DoubleNode('T');
    let node2 = new tool.DoubleNode('o');
    let node3 = new tool.DoubleNode('o');  
    let node4 = new tool.DoubleNode('l');  
    node1.next = node2;
    node2.next = node3;
    node2.prev = node1;
    node3.next = node4;
    node3.prev = node2;
    node4.prev = node3;
    let myList = new tool.LinkedList();
    myList.head = node1;

    expect(isPalindrome(myList)).toEqual(false);   

  })

  it ('should return false if it isn\'t a palindrome - odd number of nodes', () => {
    let node5 = new tool.DoubleNode('c');
    let node6 = new tool.DoubleNode('i');
    let node7 = new tool.DoubleNode('v');  
    let node8 = new tool.DoubleNode('i');
    let node9 = new tool.DoubleNode('l')  
    node5.next = node6;
    node6.next = node7;
    node6.prev = node5;
    node7.next = node8;
    node7.prev = node6;
    node8.next = node9;
    node8.prev = node7;
    node9.prev = node8;
    let oddList = new tool.LinkedList();
    oddList.head = node5;

    expect(isPalindrome(oddList)).toEqual(false);   

  })

  it ('should return false if it has no nodes', () => {
    
    let emptyList = new tool.LinkedList();

    expect(isPalindrome(emptyList)).toEqual(false);   

  })

  it ('should return false if it isn\'t a palindrome - two nodes', () => {
    let node11 = new tool.DoubleNode('a');
    let node12 = new tool.DoubleNode('b');
    node11.next = node12;
    node12.prev = node11;
    let twoList = new tool.LinkedList();
    twoList.head = node11;

    expect(isPalindrome(twoList)).toEqual(false);   

  })
})
