/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const set = new Set();
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) continue;

    const temp = new Set();

    set.add(s[i]);

    let lastIndex = s.lastIndexOf(s[i]);

    if (lastIndex !== i) {
      for (let j = i + 1; j < lastIndex; j++) {
        temp.add(s[j]);
      }

      ans += temp.size;
    }
  }

  return ans;
};

console.log(countPalindromicSubsequence("aabca"));
console.log(countPalindromicSubsequence("adc"));
console.log(countPalindromicSubsequence("bbcbaba"));
