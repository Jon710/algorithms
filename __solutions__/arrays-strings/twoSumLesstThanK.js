/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  nums.sort((a, b) => a - b);

  let closest = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (closest < currentSum && currentSum < k) closest = currentSum;

    if (currentSum < k) left++;
    else right--;
  }

  return closest;
};
