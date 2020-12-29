'use strict';


const getPermutations = require ('./string-permutations');

describe('Testing get string permutations', () => {
  it ('should return the possible permutations', () => {
    
    expect(Array.from(getPermutations('ab'))).toEqual(['ba', 'ab']);
    expect(Array.from(getPermutations('abc'))).toEqual(['cba', 'bca', 'bac', 'cab', 'acb', 'abc']);
    expect(Array.from(getPermutations('cat'))).toEqual(['tac', 'atc', 'act', 'tca', 'cta', 'cat']);
    expect(Array.from(getPermutations('cape'))).toEqual(['epac',
    'peac',
    'paec',
    'pace',
    'eapc',
    'aepc',
    'apec',
    'apce',
    'eacp',
    'aecp',
    'acep',
    'acpe',
    'epca',
    'peca',
    'pcea',
    'pcae',
    'ecpa',
    'cepa',
    'cpea',
    'cpae',
    'ecap',
    'ceap',
    'caep',
    'cape']);
    
  });
});