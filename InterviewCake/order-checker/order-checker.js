'use strict';

function orderChecker(orders1, orders2, served) {

  
  let index1 = 0;
  let index2 = 0;


  for(let i = 0; i < served.length; i++) {
    if(index1<orders1.length && index2<orders1.length) {
      if(served[i] !== orders1[index1]  && served[i] !== orders2[index2]) {
        return false;
      }
    } 
    //if 1st array is exhausted, but 2nd one isn't
    if(index1>=orders1.length && index2<orders2.length) {
      if(served[i] !== orders2[index2]) {
        return false;
      }
    } 
    //if 2nd array is exhausted, but 1st one isn't
    if(index1<orders1.length && index2>=orders2.length) {
      if(served[i] !== orders1[index1]) {
        return false;
      }
    }
    if(served[i] === orders1[index1]) {
      index1++;
    }
    if(served[i] === orders2[index2]) {
      index2++;
    }
  }
  return true;
};

module.exports = orderChecker;
