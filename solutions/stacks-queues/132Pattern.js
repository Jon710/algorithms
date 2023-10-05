/**
 * @param {number[]} nums
 * @return {boolean}
 */
// https://www.youtube.com/watch?v=XstAJdzJmVo
var find132pattern = function (nums) {
  let secondMax = -Infinity;
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < secondMax) return true;

    while (stack && nums[i] > stack[stack.length - 1]) {
      secondMax = Math.max(secondMax, stack.pop());
    }

    stack.push(nums[i]);
  }

  return false;
};

// neetcode
var find132pattern = function (nums) {
  const stack = []; // pair [num, minLeft], mono decreasing
  let currentMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    while (stack.length && nums[i] >= stack[stack.length - 1][0]) {
      stack.pop();
    }

    if (stack.length && nums[i] > stack[stack.length - 1][1]) return true;

    stack.push([nums[i], currentMin]);
    currentMin = Math.min(currentMin, nums[i]);
  }

  return false;
};
