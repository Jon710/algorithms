// lc 334

var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  let i = Infinity;
  let j = Infinity;

  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] <= i) {
      i = nums[idx];
    } else if (nums[idx] <= j) {
      j = nums[idx];
    } else {
      return true;
    }
  }

  return false;
};
