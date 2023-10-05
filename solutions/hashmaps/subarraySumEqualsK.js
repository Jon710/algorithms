/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]]);
  let result = 0;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i];

    if (map.has(currentSum - k)) {
      result = result + map.get(currentSum - k);
    }

    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }

  return result;
};
 