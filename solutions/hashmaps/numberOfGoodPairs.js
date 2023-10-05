// lc 1512

// o(n^2)
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        count++;
      }
    }
  }

  return count;
};

// o(n)
var numIdenticalPairs = function (nums) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      count = count + map.get(nums[i]);
    }

    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  return count;
};
