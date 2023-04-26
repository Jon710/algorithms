/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const ans = new Array(nums.length);
  let left = 0,
    right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      ans[i] = nums[left] * nums[left];
      left++;
    } else {
      ans[i] = nums[right] * nums[right];
      right--;
    }
  }

  return ans;
};
