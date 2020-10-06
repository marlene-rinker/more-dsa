'use strict';

let tool = require('../../constructors/linked-list.js');

function hasCircularRef (list) {

  //send the runner - goes two spaces, send the walker - goes one space
  //if they meet, then there is a circular reference, then set result to true and return result;
  //if runner.next = null, then return result.
  if (!list.head) {
    return false;
  }
  let runner = list.head;
  let walker = list.head;
  while(runner.next) {
    walker = walker.next;
    if (runner.next.next === null) {
      return false;
    }
    runner = runner.next.next;
    if (runner.value === walker.value) {
      return true;
    }
  
  }
  return false;

}

module.exports = hasCircularRef;
