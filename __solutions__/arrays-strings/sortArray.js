// merge sort (divide and conquer)
var sortArray = function (nums) {
  function merge(left, right) {
    const result = [];
    let leftIdx = 0,
      rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }

    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  }

  if (nums.length <= 1) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(sortArray(left), sortArray(right));
};

// quicksort
// var sortArray = function(nums) {
//     function quickSort(nums, left, right) {
//         if (left >= right) return nums;

//         let pivotValue = nums[left];
//         let smaller = left;

//         for (let i = left + 1; i <= right; i++) {
//             let bigger = i;
//             if (nums[bigger] < pivotValue) {
//                 smaller++;
//                 [nums[bigger], nums[smaller]] = [nums[smaller], nums[bigger]];
//             }
//         }

//         [nums[smaller], nums[left]] = [nums[left], nums[smaller]];

//         quickSort(nums, left, smaller - 1);
//         quickSort(nums, smaller + 1, right);
//         return nums
//     }

//     return quickSort(nums, 0, nums.length - 1)
// };
