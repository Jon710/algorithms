/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const set = new Set();
  let max = 0,
    currentSum = 0,
    left = 0,
    right = 0;

  while (left < nums.length && right < nums.length) {
    if (!set.has(nums[right])) {
      set.add(nums[right]);
      currentSum += nums[right];
      max = Math.max(currentSum, max);
      right++;
    } else {
      set.delete(nums[left]);
      currentSum -= nums[left];
      left++;
    }
  }

  return max;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])); // 17
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])); // 8
