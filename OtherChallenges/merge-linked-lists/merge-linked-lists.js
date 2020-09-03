'use strict';

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function mergeSorted(head1, head2) {
  if(!head1) {return head2};
  if(!head2) {return head1};

  let mergedList = null;

  if(head1.val <= head2.val) {
    mergedList = head1;
    head1 = head1.next;
  }else {    
    mergedList = head2;
    head2 = head2.next;
  }
  
  let current = mergedList;

  while (head1 !== null && head2 !== null) {
    if(head1.val <= head2.val) {
      current.next = head1;
      head1 = head1.next;
      current = current.next;
      continue;
    } 
    if(head1.val > head2.val) {
      current.next = head2;
      head2 = head2.next;
      current = current.next;    
    }     
  }
  if(head1 === null) {
    current.next = head2;
  }
  if(head2 === null) {
    current.next = head1;
  }
  return mergedList;
}

module.exports = {
  mergeSorted,
  ListNode
}
