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

    let n4 = new Node(4, null);
    let n3 = new Node(3, n4);
    let n2 = new Node(2, n3);
    let n1 = new Node(1, n2);

    let n5 = new Node(5, null);

    console.log(reverseLinkedList(n1));
    console.log(reverseLinkedList(n5));