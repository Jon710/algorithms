// https://www.youtube.com/watch?v=aoHbYlO8vDg
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

var maxProduct = function (s) {
  const map = new Map(); // bitmask -> length
  let ans = 0;

  // 2 ** s.length === 1 << s.length
  for (let mask = 1; mask < 2 ** s.length; mask++) {
    let subsequence = "";
    for (let i = 0; i < s.length; i++) {
      if (mask & (1 << i)) subsequence += s[i];

      if (isPalindrome(subsequence)) map.set(mask, subsequence.length);
    }
  }

  for (let [k1, v1] of map) {
    for (let [k2, v2] of map) {
      // disjoint
      if ((k1 & k2) === 0) {
        ans = Math.max(ans, v1 * v2);
      }
    }
  }

  return ans;
};

// in this solution, we have 3 possibilites:
// 1) not considering the current char for either subsequence
// 2) considering it for first one
// 3) considering it for second subsequence
function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str.charAt(l) != str.charAt(r)) return false;

    l++;
    r--;
  }

  return true;
}

var maxProduct = function (s) {
  function dfs(idx, word1, word2) {
    if (idx > s.length) {
      return isPalindrome(word1) && isPalindrome(word2)
        ? word1.length * word2.length
        : 0;
    }

    return Math.max(
      dfs(idx + 1, word1, word2),
      dfs(idx + 1, `${word1}${s[idx]}`, word2),
      dfs(idx + 1, word1, `${word2}${s[idx]}`)
    );
  }

  return dfs(0, "", "");
};
