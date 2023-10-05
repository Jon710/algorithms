// O(2^n * n) time, O(n) space
function backtrack(num, arr = [], start = 0) {
  if (start === num.length && arr.length >= 3) return true;

  for (let i = start; i < num.length; ++i) {
    if (num[start] === "0" && i !== start) break;

    const n = parseInt(num.slice(start, i + 1));
    if (arr[arr.length - 1] + arr[arr.length - 2] !== n && arr.length >= 2)
      continue;

    arr.push(n);
    if (backtrack(num, arr, i + 1)) return true;
    arr.pop();
  }

  return false;
}

function isAdditiveNumber(num) {
  return backtrack(num);
}
