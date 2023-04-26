function findMaxAverage(nums, k) {
  let max = -Infinity;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    const windowSize = windowEnd - windowStart + 1;
    windowSum += nums[windowEnd];

    if (windowSize === k) {
      max = Math.max(max, windowSum / k);
      // subtract the left most value because we'll be starting a new subarray
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }

  return max;
}
