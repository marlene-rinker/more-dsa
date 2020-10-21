'use strict';

const tool = require('../../constructors/linked-list.js');
const test = require('./ll-palindrome.js');

describe('Testing singly linked list is palindrome', () => {
  it ('should return true if it is a palindrome - even number of nodes', () => {
    let node1 = new tool.Node('T');
    let node2 = new tool.Node('o');
    let node3 = new tool.Node('o');  
    let node4 = new tool.Node('t');  
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    let myList = new tool.LinkedList();
    myList.head = node1;

    expect(test.singlyLLIsPalindrome(myList)).toEqual(true);   

  })

  it ('should return true if it is a palindrome - odd number of nodes', () => {
    let node5 = new tool.Node('c');
    let node6 = new tool.Node('i');
    let node7 = new tool.Node('v');  
    let node8 = new tool.Node('i');
    let node9 = new tool.Node('c')  
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    let oddList = new tool.LinkedList();
    oddList.head = node5;

    expect(test.singlyLLIsPalindrome(oddList)).toEqual(true);   

  })

  it ('should return true if it has one node', () => {
    let node10 = new tool.Node(1);
    let oneList = new tool.LinkedList();
    oneList.head = node10;

    expect(test.singlyLLIsPalindrome(oneList)).toEqual(true);   

  })

  it ('should return true if it is a palindrome - two nodes', () => {
    let node11 = new tool.Node('a');
    let node12 = new tool.Node('a');
    node11.next = node12;
    let twoList = new tool.LinkedList();
    twoList.head = node11;

    expect(test.singlyLLIsPalindrome(twoList)).toEqual(true);   

  })

  it ('should return false if it isn\'t a palindrome - even number of nodes', () => {
    let node1 = new tool.Node('T');
    let node2 = new tool.Node('o');
    let node3 = new tool.Node('o');  
    let node4 = new tool.Node('l');  
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    let myList = new tool.LinkedList();
    myList.head = node1;

    expect(test.singlyLLIsPalindrome(myList)).toEqual(false);   

  })

  it ('should return false if it isn\'t a palindrome - odd number of nodes', () => {
    let node5 = new tool.Node('c');
    let node6 = new tool.Node('i');
    let node7 = new tool.Node('v');  
    let node8 = new tool.Node('i');
    let node9 = new tool.Node('l')  
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    let oddList = new tool.LinkedList();
    oddList.head = node5;

    expect(test.singlyLLIsPalindrome(oddList)).toEqual(false);   

  })

  it ('should return false if it has no nodes', () => {
    
    let emptyList = new tool.LinkedList();

    expect(test.singlyLLIsPalindrome(emptyList)).toEqual(false);   

  })

  it ('should return false if it isn\'t a palindrome - two nodes', () => {
    let node11 = new tool.Node('a');
    let node12 = new tool.Node('b');
    node11.next = node12;
    let twoList = new tool.LinkedList();
    twoList.head = node11;

    expect(test.singlyLLIsPalindrome(twoList)).toEqual(false);   

  })
})

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

    expect(test.doublyLLIsPalindrome(myList)).toEqual(true);   

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

    expect(test.doublyLLIsPalindrome(oddList)).toEqual(true);   

  })

  it ('should return true if it has one node', () => {
    let node10 = new tool.DoubleNode(1);
    let oneList = new tool.LinkedList();
    oneList.head = node10;

    expect(test.doublyLLIsPalindrome(oneList)).toEqual(true);   

  })

  it ('should return true if it is a palindrome - two nodes', () => {
    let node11 = new tool.DoubleNode('a');
    let node12 = new tool.DoubleNode('a');
    node11.next = node12;
    node12.prev = node11;
    let twoList = new tool.LinkedList();
    twoList.head = node11;

    expect(test.doublyLLIsPalindrome(twoList)).toEqual(true);   

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

    expect(test.doublyLLIsPalindrome(myList)).toEqual(false);   

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

    expect(test.doublyLLIsPalindrome(oddList)).toEqual(false);   

  })

  it ('should return false if it has no nodes', () => {
    
    let emptyList = new tool.LinkedList();

    expect(test.doublyLLIsPalindrome(emptyList)).toEqual(false);   

  })

  it ('should return false if it isn\'t a palindrome - two nodes', () => {
    let node11 = new tool.DoubleNode('a');
    let node12 = new tool.DoubleNode('b');
    node11.next = node12;
    node12.prev = node11;
    let twoList = new tool.LinkedList();
    twoList.head = node11;

    expect(test.doublyLLIsPalindrome(twoList)).toEqual(false);   

  })
})
