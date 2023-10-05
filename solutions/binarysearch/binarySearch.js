let nums = [2, 7, 8, 9, 10, 13, 17, 21, 29];

// iterative
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

// https://www.youtube.com/watch?v=tgVSkMA8joQ
function bs2(array, target) {
  let left = 0;
  let right = array.length;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(binarySearch(nums, 7));
console.log(binarySearch(nums, 15));

// recursive
// function binarySearch(array, left, right, target) {
//   if (left > right) return -1;

//   let mid = Math.floor(left + (right - left) / 2);

//   if (target === array[mid]) {
//     return mid;
//   } else if (target < array[mid]) {
//     return binarySearch(array, left, mid - 1, target);
//   } else {
//     return binarySearch(array, mid + 1, right, target);
//   }
// }

// console.log(binarySearch(nums, 0, nums.length - 1, 7));
// console.log(binarySearch(nums, 0, nums.length - 1, 15));
