/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // sliding window + monotonic queue
  const maxQueue = [];
  const minQueue = [];
  let start = 0;
  let res = 0;

  for (let end = 0; end < nums.length; end++) {
    while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < nums[end]) {
      maxQueue.pop();
    }

    while (minQueue.length > 0 && minQueue[minQueue.length - 1] > nums[end]) {
      minQueue.pop();
    }

    maxQueue.push(nums[end]);
    minQueue.push(nums[end]);

    if (maxQueue[0] - minQueue[0] > limit) {
      if (maxQueue[0] === nums[start]) maxQueue.shift();

      if (minQueue[0] === nums[start]) minQueue.shift();

      start++;
    }

    res = Math.max(res, end - start + 1);
  }

  return res;
};
