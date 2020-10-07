'use strict';

let tool = require('../../constructors/linked-list.js');

function doubleListIsPalindrome(list) {

  if (!list.head) {return false};
  let counter = 1;
  let one = list.head;
  let two = list.head;

  //count the nodes and leave one at the last node
  while(one.next) {
    counter = counter + 1;
    one = one.next;
  }
  let middle = Math.round(counter/2);
  //compare from start to middle to end to middle

  let pointer = 1;

  while(pointer <= middle) {
    
    if(typeof one.value === 'string') {
      one.value = one.value.toLowerCase();
    }
    if(typeof two.value === 'string') {
      two.value = two.value.toLowerCase();
    }

    if (one.value !== two.value) {
      return false;
    }
    one = one.prev;
    two = two.next;
    pointer = pointer + 1;
  }
  return true;

}

module.exports = doubleListIsPalindrome;

