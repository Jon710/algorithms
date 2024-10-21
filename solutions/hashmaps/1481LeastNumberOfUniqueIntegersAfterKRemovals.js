/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();
  let removed = 0;

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const frequencies = [...map.values()].sort((a, b) => a - b);

  for (const frequency of frequencies) {
    if (k >= frequency) {
      k -= frequency;
      removed++;
    } else {
      break;
    }
  }

  return map.size - removed;
};

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)); // 2
