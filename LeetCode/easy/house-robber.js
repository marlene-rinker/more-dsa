'use strict';

function houseRobber(loot) {
  if(!loot) return 0;
  if (loot.length === 0) return 0;
  if (loot.length === 1) return loot[0]; 
  
  let choice = [];
  choice[0] = loot[0];
  choice[1] = Math.max(loot[0], loot[1]);

  for (let i = 2; i < loot.length; i++) {
    let choiceA = choice[0];
    let choiceB = choice[1];
    

    choice[0] = choiceB;
    choice[1] = Math.max(choiceA + loot[i], choiceB);
  }

  return choice[1];
};

module.exports = houseRobber;

