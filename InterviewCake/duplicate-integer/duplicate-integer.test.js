'use strict';

const findDuplicate = require('./duplicate-integer.js');

describe('Testing find duplicate number in an array', () => {
  it ('should return the duplicate number', () => {    
    let arr1 = [1,2,3,1,4,5];
    let arr5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,3,14];
    let arr6 = [1,2,3,1000,4,5,1000,6,7,1000,8,9];

    expect(findDuplicate(arr1)).toEqual('1 is a duplicate');
    expect(findDuplicate(arr5)).toEqual('3 is a duplicate');
    expect(findDuplicate(arr6)).toEqual('1000 is a duplicate');
    })

    it ('should return no duplicate number', () => {   
      
      let arr2 = [];
      let arr3 = [1];
      let arr4 = [100, 101, 102, 103, 104, 105];     
  
      expect(findDuplicate(arr2)).toEqual('No duplicate');
      expect(findDuplicate(arr3)).toEqual('No duplicate');
      expect(findDuplicate(arr4)).toEqual('No duplicate');
      
      })

  });