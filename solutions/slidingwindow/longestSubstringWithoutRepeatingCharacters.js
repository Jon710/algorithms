/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let longestSubstring = 0;
  const set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      longestSubstring = Math.max(set.size, longestSubstring);
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return longestSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
