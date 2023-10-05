// lc 852
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    } else if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
};

// console.log(peakIndexInMountainArray([0, 5, 10, 2]));
console.log(peakIndexInMountainArray([0, 5, 4, 2]));

