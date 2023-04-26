// O(nlog(n))
// Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array.
// The array is then partitioned into two subarrays of values less than and greater than the pivot value.
// We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return.
// The unwinding of the recursive calls return us the sorted array.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const nums2 = [4, 2, 1, 100, 7, 2837, 299, 100, 5, 3, 4, 2, 1, 100, 7, 2837];

function partition(array, pivot, left, right) {
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < array[pivot]) {
      [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
      partitionIndex++;
    }
  }

  [array[right], array[partitionIndex]] = [array[partitionIndex], array[right]];

  return partitionIndex;
}

function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    // sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
}

function quickSort2(nums, left, right) {
  if (left >= right) return nums;

  let pivotValue = nums[left];
  let smaller = left;

  for (let i = left + 1; i <= right; i++) {
    let bigger = i;
    if (nums[bigger] < pivotValue) {
      smaller++;
      [nums[bigger], nums[smaller]] = [nums[smaller], nums[bigger]];
    }
  }

  [nums[smaller], nums[left]] = [nums[left], nums[smaller]];

  quickSort2(nums, left, smaller - 1);
  quickSort2(nums, smaller + 1, right);
  return nums;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

console.log(quickSort2(numbers, 0, numbers.length - 1));
console.log(quickSort2(nums2, 0, nums2.length - 1));
