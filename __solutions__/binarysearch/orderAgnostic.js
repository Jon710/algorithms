function orderAgnostic(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  // find whether array is ascending or descending
  const isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) return mid;

    if (isAscending) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

const nums = [1, 3, 6, 10, 20, 340, 500];

const nums2 = [500, 200, 140, 100, 80, 50];

console.log(orderAgnostic(nums, 10));
