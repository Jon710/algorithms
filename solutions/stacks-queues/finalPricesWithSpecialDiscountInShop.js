/**
 * @param {number[]} prices
 * @return {number[]}
 */
// var finalPrices = function(prices) {
//     const result = prices;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] <= prices[i]) {
//                 result[i] = prices[i] - prices[j];
//                 break;
//             }
//         }
//     }

//     return result;
// };

// monotonic stack. similar to next smaller problem
var finalPrices = function (prices) {
  const result = prices;
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      result[stack[stack.length - 1]] =
        prices[stack[stack.length - 1]] - prices[i];
      stack.pop();
    }

    stack.push(i);
  }

  return result;
};
