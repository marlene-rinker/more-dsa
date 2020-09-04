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

