'use strict';

function getMaxProfit(prices) {
if(!prices[1]) {
  return 0;
}
let result = prices[1] - prices[0];

for (let i = 0; i < prices.length; i++) {
  for(let j = i+1; j < prices.length; j++) {
  let profit = prices[j] - prices[i];
  result = Math.max(result, profit);
  }
}
return result;
}

module.exports = getMaxProfit;

