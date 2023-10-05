/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternMap = new Map();
  const sMap = new Map();
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== words[i])
      return false;

    if (sMap.has(words[i]) && sMap.get(words[i]) !== pattern[i]) return false;

    patternMap.set(pattern[i], words[i]);
    sMap.set(words[i], pattern[i]);
  }

  return true;
};
