// lc 1
// this solution doesn't work on leetcode, because it's sorting the array and expecting different indices
// however, it does the job and its complexity is o(nlogn)
var twoSum = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum < target) {
      start++;
    } else if (sum > target) {
      end--;
    } else {
      return [start, end];
    }
  }
};

// brute force o(n^2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

// o(n) time and space complexity
var twoSum = function (nums, target) {
  // lookup speed in map is constant O(1)
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let firstNumber = nums[i];
    let secondNumber = target - firstNumber;

    if (map.has(secondNumber)) {
      return [map.get(secondNumber), i];
    }

    map.set(firstNumber, i);
  }
};
