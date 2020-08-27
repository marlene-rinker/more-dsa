'use strict';

function mergeRanges(arr) {

  //sort array then merge items in sorted array

  let sortArray = arr;
    for (let i = 1; i < sortArray.length; i++) {
      let j = i - 1;
      let temp = sortArray[i];
      while (j >= 0 && temp.startTime < sortArray[j].startTime) {
        sortArray[j + 1] = sortArray[j];
        j = j - 1;
      }
      sortArray[j + 1] = temp;
    }

    for (let i = 1; i < sortArray.length; i++) {
      let j = i - 1;
        if (sortArray[j].endTime >= sortArray[i].startTime) {
          if (sortArray[j].endTime < sortArray[i].endTime) {
          sortArray[j].endTime = sortArray[i].endTime;
        }
        sortArray.splice(i, 1);
        i = i - 1;
      };
    }
  return sortArray;
};

module.exports = mergeRanges;
