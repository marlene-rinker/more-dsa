'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

module.exports = {
  Node,
  DoubleNode,
  LinkedList,
}