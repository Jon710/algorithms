/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      currentMax = currentMax + 1;
    } else {
      currentMax = 0;
    }

    max = Math.max(currentMax, max);
  }

  return max;
};
