/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const prefixTop = grid[0].slice();
  const prefixBottom = grid[1].slice();

  for (let i = 1; i < grid[0].length; i++) {
    prefixTop[i] += prefixTop[i - 1];
    prefixBottom[i] += prefixBottom[i - 1];
  }

  let ans = Infinity;

  for (let i = 0; i < grid[0].length; i++) {
    const top = prefixTop[grid[0].length - 1] - prefixTop[i];
    const bottom = i > 0 ? prefixBottom[i - 1] : 0;
    const secondRobot = Math.max(top, bottom);

    ans = Math.min(ans, secondRobot);
  }

  return ans;
};
