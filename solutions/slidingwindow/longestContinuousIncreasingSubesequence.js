/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let longest = 1;
  let windowStart = 0;
  let windowEnd = 1;

  while (windowEnd < nums.length) {
    if (nums[windowEnd - 1] >= nums[windowEnd]) windowStart = windowEnd;

    windowEnd++;

    longest = Math.max(windowEnd - windowStart, longest);
  }

  return longest;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
