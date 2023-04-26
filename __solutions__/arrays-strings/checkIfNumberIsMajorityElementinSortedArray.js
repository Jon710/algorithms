/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var isMajorityElement = function (nums, target) {
  let i = 0;
  while (i < nums.length && nums[i] !== target) {
    i++;
  }

  let j = i;
  while (j < nums.length && nums[j] === target) {
    j++;
  }

  return j - i > nums.length / 2;
};
