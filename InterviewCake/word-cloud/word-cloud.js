'use strict';


function wordCloud(str) {
  let wordsMap = new Map();

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let word = '';
  for (let i = 0; i <= str.length; i++) {
    // If it's a letter, add it to the word and continue
    if (i!=str.length && alphabet.includes(str[i].toLowerCase())) {
      word = word + str[i].toLowerCase();
      continue;
    } 
    // If it's a ' or -, and has a letter before and after it, add it to the word
    if(i!=str.length && (str[i] === '\'' || str[i] === '-') && (alphabet.includes(str[i - 1].toLowerCase()) && alphabet.includes(str[i + 1].toLowerCase()) )){
      word = word + str[i];
      continue;
    }

    // If it's not a letter, check to see if we have this in the cloud and increment
    if(wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word) + 1);
      word = '';
      continue;
    }

    // If it's not in the map, make sure it's not empty (e.g. we matched a non-letter) and add it
    if (word !== '') {
      wordsMap.set(word, 1);
      word='';
    }
  }


  return wordsMap;
}

let string1 = 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'

let string2 = 'Let\'s go to the party party!';
let string3 = 'The sky was blue-grey.';
let string4 = 'happy-happy, joy-joy';

console.log(wordCloud(string1));
console.log(wordCloud(string2));
console.log(wordCloud(string3));
console.log(wordCloud(string4));


module.exports = wordCloud;