/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function (weight) {
  weight.sort((a, b) => a - b);
  let max = 0;
  let currentSum = 0;

  for (let i = 0; i < weight.length; i++) {
    currentSum = currentSum + weight[i];
    if (currentSum <= 5000) max = max + 1;
    else break;
  }

  return max;
};
