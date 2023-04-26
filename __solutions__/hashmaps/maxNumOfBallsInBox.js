// map or dp to solve
var countBalls = function (lowLimit, highLimit) {
  const map = new Map();
  // const dp = new Array(highLimit + 1).fill(0);

  function sumDigit(num) {
    let total = 0;

    while (num > 0) {
      total += num % 10;
      num = Math.floor(num / 10);
    }

    return total;
  }

  for (let i = lowLimit; i <= highLimit; i++) {
    const currentSum = sumDigit(i);
    map.set(currentSum, (map.get(currentSum) || 0) + 1);
    // dp[currentSum]++;
  }

  return Math.max(...map.values());
  // return Math.max(...dp);
};
