'use strict';

function numberOfWays(amt, denominations) {

  denominations = denominations.sort(function (a, b) {return a-b});
  

  if(denominations[0] > amt || !denominations[0]) {return 0};
  if(denominations[0] === amt) {return 1};

  let results = {
    0: 1,
  };

  for (let i = 0; i < denominations.length; i++) {
    let higherAmt = denominations[i];
    while ((denominations[i] <= amt) && (higherAmt <= amt)) {
      let remainder = higherAmt - denominations[i];
      if (!results[remainder]){
        results[remainder] = 0;
      }
      if (!results[higherAmt]) {
        results[higherAmt] = 0;
      }
      results[higherAmt] += results[remainder];
      higherAmt++;
    }
  }


  return results[amt];

  
}

//interview cake solution below for reference

function changePossibilitiesBottomUp(amount, denominations) {

  // Initialize an array of zeros with indices up to amount
  const waysOfDoingNcents = new Array(amount + 1).fill(0);
  waysOfDoingNcents[0] = 1;

  denominations.forEach(coin => {
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      console.log('coin: ', coin);
      const higherAmountRemainder = higherAmount - coin;
      console.log('higherAmountRemainder: ', higherAmountRemainder);
      console.log('waysOfdoingNcents[higherAmount]', waysOfDoingNcents[higherAmount]);
      console.log('waysOfdoingNcents[higherAmountRemainder]', waysOfDoingNcents[higherAmountRemainder]);

      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
      console.log('array in for loop: ', waysOfDoingNcents);
    }
  });
  console.log('final array: ', waysOfDoingNcents);
  return waysOfDoingNcents[amount];
}

module.exports = numberOfWays;

