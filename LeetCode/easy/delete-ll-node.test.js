'use strict';

let test = require ('./delete-ll-node.js');

describe('Testing delete node in linked list', () => {
  it ('node should be removed from the list', () => {
    let node1 = new test.ListNode(1);
    let node2 = new test.ListNode(2);
    let node3 = new test.ListNode(3);
    let node4 = new test.ListNode(4);
    let node5 = new test.ListNode(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    //node after node 3 before delete node 4
    expect(node3.next.val).toEqual(4);

    test.deleteNode(node4);

    // node after node 3 after delete node 4
    expect(node3.next.val).toEqual(5);
  })

  it ('node should be removed from the list', () => {
    let node1 = new test.ListNode(4);
    let node2 = new test.ListNode(5);
    let node3 = new test.ListNode(1);
    let node4 = new test.ListNode(9);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    //node after node 1 before delete node 2
    expect(node1.next.val).toEqual(5);

    test.deleteNode(node2);

    // node after node 1 after delete node 2
    expect(node1.next.val).toEqual(1);
  })

  it ('node should be removed from the list', () => {
    let node1 = new test.ListNode(4);
    let node2 = new test.ListNode(5);
    let node3 = new test.ListNode(1);
    let node4 = new test.ListNode(9);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    //node after node 2 before delete node 3
    expect(node2.next.val).toEqual(1);

    test.deleteNode(node3);

    // node after node 2 after delete node 3
    expect(node2.next.val).toEqual(9);
  })

  it ('node should be removed from the list', () => {
    let node1 = new test.ListNode(1);
    let node2 = new test.ListNode(2);
    let node3 = new test.ListNode(3);
    let node4 = new test.ListNode(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    //node after node 2 before delete node 3
    expect(node2.next.val).toEqual(3);

    test.deleteNode(node3);

    // node after node 2 after delete node 3
    expect(node2.next.val).toEqual(4);
  })

  it ('node should be removed from the list', () => {
    let node1 = new test.ListNode(0);
    let node2 = new test.ListNode(1);
    

    node1.next = node2;
    

    //first node before delete
    expect(node1.next).toEqual(node2);
    expect(node1.val).toEqual(0)

    test.deleteNode(node1);

    // first node after delete
    expect(node1.next).toEqual(null);
    expect(node1.val).toEqual(1);
  })

  it ('node should be removed from the list', () => {
    let node1 = new test.ListNode(-3);
    let node2 = new test.ListNode(5);
    let node3 = new test.ListNode(-99);
    

    node1.next = node2;
    node2.next = node3;
    

    //first node before delete
    expect(node1.next).toEqual(node2);
    expect(node1.val).toEqual(-3)

    test.deleteNode(node1);

    // first node after delete
    expect(node1.next).toEqual(node3);
    expect(node1.val).toEqual(5);
  })
}); 
