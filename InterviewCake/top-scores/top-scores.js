'use strict';

function topScores(scores, highScore) {
let count = [];
let z = 0;
//set up count array with empty values for each possible score
for(let i = 0; i <= highScore; i++) {
  count[i] = 0;
}

for (let i = 0; i < scores.length; i++) {
  count[scores[i]]++;
}


for (let i = highScore; i >= 0; i--) {
  while(count[i]-- > 0) {
    scores[z++] = i;
  }
}
return scores;

}

module.exports = topScores;

// let arr = [37, 89, 41, 65, 91, 53];
// let arr2 = [37, 89, 41, 65, 65, 91, 100, 100, 53, 0];
// console.log(topScores(arr2, 100));