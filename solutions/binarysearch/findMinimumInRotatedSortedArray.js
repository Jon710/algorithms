// //lc 153
// var findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   if (nums.length === 1) return nums[0];

//   // check if it is rotated
//   if (nums[left] < nums[right]) return nums[left];

//   while (left <= right) {
//     let mid = Math.floor(left + (right - left) / 2);

//     if (nums[mid] > nums[mid + 1]) {
//       return nums[mid + 1];
//     } else if (nums[mid - 1] > nums[mid]) {
//       return nums[mid];
//     }

//     if (nums[mid] > nums[left]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
//   let left = 0,
//     right = nums.length - 1;

//   while (left < right) {
//     const mid = Math.floor(left + (right - left) / 2);
//     const [leftNum, rightNum] = [nums[left], nums[right]];

//     if (leftNum < rightNum) return leftNum;

//     if (leftNum <= nums[mid]) left = mid + 1;

//     if (nums[mid] < leftNum) right = mid;
//   }

//   return nums[left];
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    ans = Infinity;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] >= nums[left]) {
      ans = Math.min(nums[left], ans);
      left = mid + 1; // left half is sorted, so we can eliminate it
    } else {
      ans = Math.min(nums[mid], ans);
      right = mid - 1; // right half is sorted, so we can eliminate it
    }
  }

  return ans;
};

// console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 1, 2, 3]));
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
