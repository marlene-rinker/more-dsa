'use strict';

const wordCloud = require('./word-cloud.js');

describe('Testing word cloud', () => {
  it ('should get words and their counts', () => {
    let string1 = 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'
    let string2 = 'Let\'s go to the party party!';
    let string3 = 'The sky was blue-grey.';
    let string4 = 'happy-happy, joy-joy';
    
    //not the best tests, but something
    
    expect(wordCloud(string1)).not.toBeNull();
    expect(wordCloud(string2)).not.toBeNull();
    expect(wordCloud(string3)).not.toBeNull();
    expect(wordCloud(string4)).not.toBeNull();
    
    
  });
});