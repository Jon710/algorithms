// 713
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let ans = 0;
  let start = 0;
  let end = 0;
  let product = 1;

  while (end < nums.length) {
    product *= nums[end];

    while (product >= k) {
      product = product / nums[start];
      start++;
    }

    ans += end - start + 1;

    end++;
  }

  return ans;
};
