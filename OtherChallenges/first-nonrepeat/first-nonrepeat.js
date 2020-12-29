'use strict';

function notRepeated(str) {

  if (str === '') { return null};

  let characters = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!characters[char]) {
      characters[char] = {};
      characters[char].count = 1;
      characters[char].position = i;
      continue;
    }
    characters[char].count += 1;
  }

  

  let results = Object.values(characters);
  
  let answer = null;

  results.forEach(entry => {
    if ((entry.count === 1) && ((answer === null) || answer > entry.position)) {
      answer = entry.position;
    }
  })

  if (answer !== null) { return str[answer]};

  return answer;


}

module.exports = notRepeated;



//From interview:
function notRepeatedI(str) {
  if (str === '') { return null};
  
  
  
  let results = {};
  for (let i = 0; i < str.length; i++) {
    if (!results[str[i]]) {
      results[str[i]] = {};
      results[str[i]].count = 1;
      results[str[i]].position = i;
      continue;
    }
    results[str[i]].count += 1;
  }
  
  let lowestOneSoFar = null;
  //find count of 1 and lowest position
  let one = Object.values(results);
  one.forEach(entry => {
    if((entry.count === 1) && ((lowestOneSoFar === null) || (lowestOneSoFar > entry.position))) {
      lowestOneSoFar = entry.position;
    }
  
  })
  
  
  if (lowestOneSoFar !== null) {return str[lowestOneSoFar];}
  
  return null;
  
  
  
  }