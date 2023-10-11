/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// o(n) worst case. best case is logn
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) return true;

    if (nums[left] < nums[mid]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] > nums[mid]) {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // values are equal. worst case here is o(n)
      left++;
    }
  }

  return false;
};
