'use strict';

function stringPermutations(str) {
  
  if (str.length <= 1) { 
    return new Set([str])
  };
  
  const allButLast = str.slice(0, -1);
  const lastChar = str[str.length - 1];
  
  
  
  const allButLastPerms = stringPermutations(allButLast);
  
  let result = new Set();
  allButLastPerms.forEach(perm => {
    for (let i = 0; i <= allButLast.length; i++) {
      let newPerm = perm.slice(0, i) + lastChar + perm.slice(i);
      result.add(newPerm);
    }
  });
  
  return result;
  

}

module.exports = stringPermutations;



