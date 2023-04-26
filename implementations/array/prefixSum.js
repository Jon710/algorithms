function prefix(nums) {
  const prefixSums = new Array(nums.length);

  prefixSums[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefixSums[i] = prefixSums[i - 1] + nums[i];
  }

  return prefixSums;
}

function suffix(nums) {
  const suffixSums = new Array(nums.length);

  suffixSums[nums.length - 1] = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) {
    suffixSums[i] = suffixSums[i + 1] + nums[i];
  }

  return suffixSums;
}

const arr = [8, 1, 5, 7, 8, 9, 12];

console.log(prefix(arr));
console.log(suffix(arr));
