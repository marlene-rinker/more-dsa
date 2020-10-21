'use strict';

let tool = require('../../constructors/linked-list.js');

function doublyLLIsPalindrome(list) {

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

function singlyLLIsPalindrome(list) {

  if (!list.head) {return false};
  let count = 0;
  let counter = list.head;
  let current = list.head;
  let values = [];

  
  while(counter) {
    count = count + 1;
    counter = counter.next;
  }
  
  let middle = Math.round(count/2);
  
  

  let position = 1;
  

  while(position <= middle) {
    if(typeof current.value === 'string') {
      current.value = current.value.toLowerCase();
    }
    values.push(current.value);
    current = current.next;
    position = position + 1;
  }
  
  let comp = middle - 1;
  if(count % 2 === 1) {
    comp = comp - 1;
  }
  
  while(current) {
    if(typeof current.value === 'string') {
      current.value = current.value.toLowerCase();
    }
    if(current) {
      console.log('comp is: ', comp);
      console.log('current value is: ', current.value, 'and values[comp] is: ', values[comp]);
      if(current.value !== values[comp]) {return false};
      current = current.next;
      comp = comp - 1;
    }
  }
  return true;

}

module.exports = {
  doublyLLIsPalindrome,
  singlyLLIsPalindrome,
}






