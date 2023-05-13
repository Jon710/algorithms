function findMaxAverage(nums, k) {
  let max = -Infinity;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];

    if (windowEnd - windowStart + 1 === k) {
      max = Math.max(max, windowSum / k);
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }

  return max;
}
