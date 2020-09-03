'use strict';

const test = require('./merge-linked-lists.js');

describe('Testing merge linked lists', () => {
  it ('should return merged linked list', () => {
    let n4 = new test.ListNode(19, null);
    let n3 = new test.ListNode(15, n4);
    let n2 = new test.ListNode(8, n3);
    let n1 = new test.ListNode(4, n2);
    let l1 = n1;

    let n8 = new test.ListNode(16, null);
    let n7 = new test.ListNode(10, n8);
    let n6 = new test.ListNode(9, n7);
    let n5 = new test.ListNode(7, n6);
    let l2 = n5;

    let myList = test.mergeSorted(l1, l2);
    expect(myList.val).toEqual(4);
    expect(myList.next.val).toEqual(7);
    expect(myList.next.next.val).toEqual(8);
    expect(myList.next.next.next.val).toEqual(9);
    expect(myList.next.next.next.next.val).toEqual(10);
    expect(myList.next.next.next.next.next.val).toEqual(15);
    expect(myList.next.next.next.next.next.next.val).toEqual(16);
    expect(myList.next.next.next.next.next.next.next.val).toEqual(19);

  })

  it ('should return merged linked list', () => {
    
    let n2 = new test.ListNode(18, null);
    let n1 = new test.ListNode(14, n2);
    let l1 = n1;

    let n8 = new test.ListNode(16, null);
    let n7 = new test.ListNode(10, n8);    
    let l2 = n7;

    let myList = test.mergeSorted(l1, l2);
    expect(myList.val).toEqual(10);
    expect(myList.next.val).toEqual(14);
    expect(myList.next.next.val).toEqual(16);
    expect(myList.next.next.next.val).toEqual(18);
  })

  it ('should return merged linked list', () => {
    
    let n2 = new test.ListNode(18, null);
    let n1 = new test.ListNode(14, n2);
    let l1 = n1;
    
    let l2 = null;

    let myList = test.mergeSorted(l1, l2);
    expect(myList.val).toEqual(14);
    expect(myList.next.val).toEqual(18);
    
  })

  it ('should return merged linked list', () => {
    
    let l1 = null;

    let n8 = new test.ListNode(16, null);
    let n7 = new test.ListNode(10, n8);    
    let l2 = n7;

    let myList = test.mergeSorted(l1, l2);
    expect(myList.val).toEqual(10);
    expect(myList.next.val).toEqual(16);
  })

  it ('should return merged linked list', () => {
    let n4 = new test.ListNode(19, null);
    let n3 = new test.ListNode(15, n4);
    let n2 = new test.ListNode(8, n3);
    let n1 = new test.ListNode(4, n2);
    let l1 = n1;

    let n8 = new test.ListNode(16, null);
    let n7 = new test.ListNode(10, n8);
    let l2 = n7;

    let myList = test.mergeSorted(l1, l2);
    expect(myList.val).toEqual(4);
    expect(myList.next.val).toEqual(8);
    expect(myList.next.next.val).toEqual(10);
    expect(myList.next.next.next.val).toEqual(15);
    expect(myList.next.next.next.next.val).toEqual(16);
    expect(myList.next.next.next.next.next.val).toEqual(19);
  })

  it ('should return merged linked list', () => {
    
    let n2 = new test.ListNode(8, null);
    let n1 = new test.ListNode(4, n2);
    let l1 = n1;

    let n8 = new test.ListNode(16, null);
    let n7 = new test.ListNode(10, n8);
    let n6 = new test.ListNode(9, n7);
    let n5 = new test.ListNode(7, n6);
    let l2 = n5;

    let myList = test.mergeSorted(l1, l2);
    expect(myList.val).toEqual(4);
    expect(myList.next.val).toEqual(7);
    expect(myList.next.next.val).toEqual(8);
    expect(myList.next.next.next.val).toEqual(9);
    expect(myList.next.next.next.next.val).toEqual(10);
    expect(myList.next.next.next.next.next.val).toEqual(16);
  })
});  