// prefix sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (total - leftSum - nums[i] === leftSum) return i;

    leftSum = leftSum + nums[i];
  }

  return -1;
};
