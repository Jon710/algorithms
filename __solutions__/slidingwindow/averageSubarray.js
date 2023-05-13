// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

function findAverage(arr, k) {
  const ans = [];
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    if (end >= k - 1) {
      ans.push(sum / k);
      sum -= arr[start];
      start++;
    }
  }

  return ans;
}

console.log(findAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
