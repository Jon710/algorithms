// this approach doesn't take advantage of the input being sorted
// var findKthPositive = function(arr, k) {
//     const set = new Set(arr);
//     let i = 1;

//     while (k > 0) {
//         if (!set.has(i)) k--;

//         i++;
//     }

//     return i - 1;
// };

var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] - mid - 1 < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + k;
};
