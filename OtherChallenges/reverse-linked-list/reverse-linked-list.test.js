'use strict';

const test = require('./reverse-linked-list.js');

describe('Testing reverse linked list', () => {
  it ('should return the reversed linked list', () => {

    let n4 = new test.Node(4, null);
    let n3 = new test.Node(3, n4);
    let n2 = new test.Node(2, n3);
    let n1 = new test.Node(1, n2);

    let n5 = new test.Node(5, null);

    let list = test.reverseLinkedList(n1);
    let one = test.reverseLinkedList(n5);
    expect(list.value).toEqual(4);
    expect(list.next.value).toEqual(3);
    expect(list.next.next.value).toEqual(2);
    expect(list.next.next.next.value).toEqual(1);
    expect(one.value).toEqual(5);
  })
});  