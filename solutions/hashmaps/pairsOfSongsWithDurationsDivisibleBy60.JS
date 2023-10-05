/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let ans = 0;
  const map = new Map();

  for (t of time) {
    const remainder = t % 60;

    if (map.has(60 - remainder)) {
      ans += map.get(60 - remainder);
    } else if (remainder === 0 && map.has(remainder)) {
      ans += map.get(remainder);
    }

    map.set(remainder, (map.get(remainder) || 0) + 1);
  }

  return ans;
};
