'use strict';

  function Node(value, next) {
    this.value = value;
    this.next = next;
  };


  function reverseLinkedList(node1) {
    if(node1.next === null) {
      return node1;
    }

    let current = node1;
    let temp, previous;

    while(current) {
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;

    }

    return previous;

  };

  module.exports = {
    Node,
    reverseLinkedList,
  }
