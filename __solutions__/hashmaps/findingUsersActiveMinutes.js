/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const ans = new Array(k).fill(0);
  const map = new Map();

  for (let [id, time] of logs) {
    if (!map.has(id)) {
      map.set(id, new Set().add(time));
    } else {
      map.get(id).add(time);
    }
  }

  for (let set of map.values()) {
    ans[set.size - 1]++;
  }

  return ans;
};
