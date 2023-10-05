/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let idx = -1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === mid) {
      idx = mid;
      right = mid - 1; // keep going because there may be smaller elements
    } else if (arr[mid] > mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return idx;
};
