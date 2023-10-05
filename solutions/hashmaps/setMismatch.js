var findErrorNums = function (nums) {
  const map = new Map();
  let duplicateNumber;
  let missingNumber;
  let count = 1;

  for (let i = 0; i < nums.length + 1; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
    } else {
      duplicateNumber = nums[i];
    }
  }

  for (let [key, value] of map) {
    if (!map.get(count)) {
      missingNumber = count;
    } else {
      count++;
    }
  }

  return [duplicateNumber, missingNumber];
};
