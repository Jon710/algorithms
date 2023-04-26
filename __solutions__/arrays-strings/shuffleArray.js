// 1470
var shuffle = function (nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result[2 * i] = nums[i];
    result[2 * i + 1] = nums[n + i];
  }

  return result;
};
