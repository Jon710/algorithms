/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const s = num.toString();
  let ans = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (right - left + 1 === k) {
      const currentString = s.substring(left, right + 1);
      const kBeauty = num % Number(currentString);

      if (kBeauty === 0) ans++;

      left++;
    }

    right++;
  }

  return ans;
};
