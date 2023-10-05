/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function (prizePositions, k) {
  const dp = new Array(prizePositions.length).fill(0);
  let ans = 0;
  let start = 0;

  for (let end = 0; end < prizePositions.length; end++) {
    while (prizePositions[end] - prizePositions[start] > k) start++;

    const currentPrize = end - start + 1;

    dp[end + 1] = Math.max(dp[end], currentPrize);
    ans = Math.max(ans, currentPrize + dp[start]);
  }

  return ans;
};
