/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const ans = [];
  let minDiff = Infinity;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(arr[i] - arr[i - 1], minDiff);
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) ans.push([arr[i - 1], arr[i]]);
  }

  return ans;
};
