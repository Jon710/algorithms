/**
 * @param {number[]} arr
 * @return {number}
 */
// https://www.youtube.com/watch?v=lOfJfT-U_io; youtube.com/watch?v=fDeZNRNmm1Y js
var sumSubarrayMins = function (arr) {
  const stack = [];
  const previousLess = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    previousLess[i] = stack.length ? stack[stack.length - 1] : -1;

    stack.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = (result[previousLess[i]] || 0) + (i - previousLess[i]) * arr[i];
  }

  const MOD = 1e9 + 7;

  return result.reduce((a, b) => a + b) % MOD;
};
