// lc 121

var maxProfit = function (prices) {
  // o(N^2)
  //     let maxProfit = 0;

  //     for (let i = 0; i < prices.length; i++) {
  //         for (let j = i + 1; j < prices.length - 1; j++){
  //             let currentProfit = prices[j] - prices[i];
  //             if (currentProfit > maxProfit) {
  //                 maxProfit = currentProfit;
  //             }
  //         }
  //     }

  //     return maxProfit;

  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};
