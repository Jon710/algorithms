/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const set = new Set();
  let left = 0;
  let right = k - 1;

  while (right < s.length) {
    set.add(s.slice(left, right + 1));
    left++;
    right++;
  }

  // 1 << k === Math.pow(2, k)
  // if (set.size === 1 << k) return true;
  if (set.size === Math.pow(2, k)) return true;
  else return false;
};
