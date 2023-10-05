/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const set = new Set();
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) continue;

    const temp = new Set();

    set.add(s[i]);

    let lastIndex = s.lastIndexOf(s[i]);
    
    if (lastIndex !== i) {
      for (let j = i + 1; j < lastIndex; j++) {
        temp.add(s[j]);
      }
      res += temp.size;
    }
  }

  return res;
};
