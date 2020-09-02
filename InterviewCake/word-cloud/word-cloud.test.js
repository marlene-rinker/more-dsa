'use strict';

const wordCloud = require('./word-cloud.js');

describe('Testing word cloud', () => {
  it ('should get words and their counts', () => {
    let string1 = 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'
    let string2 = 'Let\'s go to the party party!';
    let string3 = 'The sky was blue-grey.';
    let string4 = 'happy-happy, joy-joy';
    
    //not the best tests, but something
    
    expect(wordCloud(string1).has('after')).toBeTruthy();
    expect(wordCloud(string1).get('after')).toBe(1);
    expect(wordCloud(string1).has('beating')).toBeTruthy();
    expect(wordCloud(string1).get('beating')).toBe(1);
    expect(wordCloud(string1).has('the')).toBeTruthy();
    expect(wordCloud(string1).get('the')).toBe(2);
    expect(wordCloud(string1).has('eggs')).toBeTruthy();
    expect(wordCloud(string1).get('eggs')).toBe(2);
    expect(wordCloud(string1).has('dana')).toBeTruthy();
    expect(wordCloud(string1).get('dana')).toBe(1);
    expect(wordCloud(string1).has('read')).toBeTruthy();
    expect(wordCloud(string1).get('read')).toBe(1);
    expect(wordCloud(string1).has('read')).toBeTruthy();
    expect(wordCloud(string1).get('read')).toBe(1);
    expect(wordCloud(string1).has('next')).toBeTruthy();
    expect(wordCloud(string1).get('next')).toBe(1);
    expect(wordCloud(string1).has('step')).toBeTruthy();
    expect(wordCloud(string1).get('step')).toBe(1);
    expect(wordCloud(string1).has('add')).toBeTruthy();
    expect(wordCloud(string1).get('add')).toBe(2);
    expect(wordCloud(string1).has('milk')).toBeTruthy();
    expect(wordCloud(string1).get('milk')).toBe(1);
    expect(wordCloud(string1).has('and')).toBeTruthy();
    expect(wordCloud(string1).get('and')).toBe(2);
    expect(wordCloud(string1).has('then')).toBeTruthy();
    expect(wordCloud(string1).get('then')).toBe(1);
    expect(wordCloud(string1).has('flour')).toBeTruthy();
    expect(wordCloud(string1).get('flour')).toBe(1);expect(wordCloud(string1).has('sugar')).toBeTruthy();
    expect(wordCloud(string1).get('sugar')).toBe(1);

    expect(wordCloud(string2).has('let\'s')).toBeTruthy();
    expect(wordCloud(string2).get('let\'s')).toBe(1);
    expect(wordCloud(string2).has('go')).toBeTruthy();
    expect(wordCloud(string2).get('go')).toBe(1);
    expect(wordCloud(string2).has('to')).toBeTruthy();
    expect(wordCloud(string2).get('to')).toBe(1);
    expect(wordCloud(string2).has('the')).toBeTruthy();
    expect(wordCloud(string2).get('the')).toBe(1);
    expect(wordCloud(string2).has('party')).toBeTruthy();
    expect(wordCloud(string2).get('party')).toBe(2);

    expect(wordCloud(string3).has('the')).toBeTruthy();
    expect(wordCloud(string3).get('the')).toBe(1);
    expect(wordCloud(string3).has('sky')).toBeTruthy();
    expect(wordCloud(string3).get('sky')).toBe(1);
    expect(wordCloud(string3).has('was')).toBeTruthy();
    expect(wordCloud(string3).get('was')).toBe(1);
    expect(wordCloud(string3).has('blue-grey')).toBeTruthy();
    expect(wordCloud(string3).get('blue-grey')).toBe(1);
    
    expect(wordCloud(string4).has('happy-happy')).toBeTruthy();
    expect(wordCloud(string4).get('happy-happy')).toBe(1);
    expect(wordCloud(string4).has('joy-joy')).toBeTruthy();
    expect(wordCloud(string4).get('joy-joy')).toBe(1);
    
    
  });
});