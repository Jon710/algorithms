/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let mostFreq = 0;
  const map = new Map();

  while (right < s.length) {
    // grow window
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    mostFreq = Math.max(mostFreq, map.get(s[right]));

    // shrink window if we need to replace more than k chars
    if (right - left + 1 - mostFreq > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};
