// brute force: o(n ^ 3) even with the sorting.
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;

        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result;
};

// o(nˆ2) / o(1) space, it could be o(m) because of the result array, but in this case it doesn't matter.
// a + b + c = 0
// b + c = -a -> this means we can use 2pointers
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      let sum = 0 - nums[i];

      while (left < right) {
        if (nums[left] + nums[right] === sum) {
          result.push([nums[i], nums[left], nums[right]]);

          // avoid all duplicates
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (nums[left] + nums[right] < sum) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};
