/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const set = new Set();
  let start = 0,
    maxSum = 0,
    currentWindowSum = 0;

  for (let end = 0; end < nums.length; end++) {
    while (set.has(nums[end])) {
      set.delete(nums[start]);
      currentWindowSum -= nums[start];
      start++;
    }

    set.add(nums[end]);
    currentWindowSum += nums[end];

    if (end - start + 1 === k) {
      maxSum = Math.max(currentWindowSum, maxSum);
      set.delete(nums[start]);
      currentWindowSum -= nums[start];
      start++;
    }
  }

  return maxSum;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
