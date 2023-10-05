/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map([[0, -1]]);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remainder = sum % k;

    if (!map.has(remainder)) map.set(remainder, i);
    else if (i - map.get(remainder) > 1) return true;
  }

  return false;
};
