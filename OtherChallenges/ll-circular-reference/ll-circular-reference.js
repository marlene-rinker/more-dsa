'use strict';

let tool = require('../../constructors/linked-list.js');

function hasCircularRef (list) {
  if (!list.head) {
    return false;
  }
  let runner = list.head;
  let walker = list.head;
  while(runner.next) {
    if (runner.next.next === null) {
      return false;
    }
    walker = walker.next;
    runner = runner.next.next;
    if (runner.value === walker.value) {
      return true;
    }
  
  }
  return false;

}

module.exports = hasCircularRef;
