// lc 1984

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let diff = Infinity;
  let start = 0;
  let end = k - 1;

  while (end < nums.length) {
    diff = Math.min(diff, nums[end] - nums[start]);

    start++;
    end++;
  }

  return diff;
};
