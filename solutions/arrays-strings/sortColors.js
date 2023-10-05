// quicksort or mergesort is nlogn
// since we know there's only 3 elements in the array, we can sort it in o(n)

// function quickSort(array, left, right) {
//   let pivot;
//   let partitionIndex;

//   if (left < right) {
//     pivot = right;
//     partitionIndex = partition(array, pivot, left, right);

//     //sort left and right
//     quickSort(array, left, partitionIndex - 1);
//     quickSort(array, partitionIndex + 1, right);
//   }

//   return array;
// }

// function partition(array, pivot, left, right) {
//   let partitionIndex = left;

//   for (let i = left; i < right; i++) {
//     if (array[i] < array[pivot]) {
//       swap(array, i, partitionIndex);
//       partitionIndex++;
//     }
//   }

//   swap(array, right, partitionIndex);

//   return partitionIndex;
// }

// function swap(array, n1, n2) {
//   let temp = array[n1];
//   array[n1] = array[n2];
//   array[n2] = temp;
// }

// var sortColors = function (nums) {
//   quickSort(nums, 0, nums.length - 1);
// };

// o(n) sorting
var sortColors = function (nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;

  function swap(arr, n1, n2) {
    [arr[n1], arr[n2]] = [arr[n2], arr[n1]];
  }

  while (i <= k) {
    if (nums[i] === 0) {
      swap(nums, i, j);
      i++;
      j++;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      swap(nums, i, k);
      k--;
    }
  }
};
