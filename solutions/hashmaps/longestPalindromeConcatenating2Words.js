/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const map = new Map();
  let ans = 0;

  for (let i = 0; i < words.length; i++) {
    const key = words[i][1] + words[i][0];

    if (map.has(key)) {
      if (map.get(key) === 1) {
        map.delete(key);
      } else {
        map.set(key, map.get(key) - 1);
      }
      ans += 4;
    } else {
      if (map.has(words[i])) {
        map.set(words[i], map.get(words[i]) + 1);
      } else {
        map.set(words[i], 1);
      }
    }
  }

  for (let word of map.keys()) {
    if (word[0] === word[1]) {
      ans += 2;
      break;
    }
  }

  return ans;
};
