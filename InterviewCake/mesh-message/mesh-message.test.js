'use strict';

const meshMessage = require('./mesh-message.js');

describe('Testing mesh message', () => {
  it ('should return an array with the shortest path from sender to recipient', () => {
    let network = {
      'Marlene': ['Dave', 'Paul', 'Gloria'],
      'Dave': ['Marlene', 'James', 'Gloria'],
      'Paul': ['Marlene', 'Nora', 'Maisie'],
      'Gloria': ['Marlene', 'Dave', 'Maisie'],
      'Maisie': ['Paul', 'Gloria'],
      'Nora': ['Paul'],
      'James': ['Dave'],
    }
    
    expect(meshMessage('James', 'Nora', network)).toEqual([ 'James', 'Dave', 'Marlene', 'Paul', 'Nora' ]);
    expect(meshMessage('Dave', 'Marlene', network)).toEqual([ 'Dave', 'Marlene' ]);
    expect(meshMessage('Marlene', 'Maisie', network)).toEqual([ 'Marlene', 'Paul', 'Maisie' ]);
  })

  it('should return an empty array if sender or recipient isn\'t valid', () => {
    let network = {
      'Marlene': ['Dave', 'Paul', 'Gloria'],
      'Dave': ['Marlene', 'James', 'Gloria'],
      'Paul': ['Marlene', 'Nora', 'Maisie'],
      'Gloria': ['Marlene', 'Dave', 'Maisie'],
      'Maisie': ['Paul', 'Gloria'],
      'Nora': ['Paul'],
      'James': ['Dave'],
    }
    expect(meshMessage('Marlene', 'Phoebe', network)).toEqual([]);
    expect(meshMessage('Phoebe', 'Marlene', network)).toEqual([]);
    expect(meshMessage('Rocky', 'Phoebe', network)).toEqual([]);
    

  })
});  