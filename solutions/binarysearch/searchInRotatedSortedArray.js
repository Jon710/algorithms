// lc 33
// o(n)
// var search = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) return i;
//   }

//   return -1;
// };

// o(logn)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) return mid;

    // first, identify if left half is sorted
    if (nums[left] <= nums[mid]) {
      // check if target is on the left half
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // check if target is on the right half
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

// console.log(search([3, 4, 5, 1, 2], 4));
console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 1));
