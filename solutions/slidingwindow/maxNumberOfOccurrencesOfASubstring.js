// 1297
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
  const map = new Map(); // need a map as there could be many valid substrings
  let max = 0;

  for (let i = 0; i <= s.length - minSize; i++) {
    const substring = s.slice(i, i + minSize);

    if (isValidSubstring(substring, maxLetters)) {
      map.set(substring, (map.get(substring) || 0) + 1);
      max = Math.max(max, map.get(substring));
    }
  }

  return max;
};

function isValidSubstring(substring, maxLetters) {
  const set = new Set(substring); // need it for unique characters
  return set.size <= maxLetters;
}

console.log(maxFreq("aababcaab", 2, 3, 4)); // 2
