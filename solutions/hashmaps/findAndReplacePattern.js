/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function matchesPattern(word, pattern) {
  const m1 = new Map();
  const m2 = new Map();

  for (let i = 0; i < word.length; i++) {
    const wordChar = word[i];
    const patternChar = pattern[i];

    if (!m1.has(wordChar)) m1.set(wordChar, patternChar);

    if (!m2.has(patternChar)) m2.set(patternChar, wordChar);

    if (m1.get(wordChar) !== patternChar || m2.get(patternChar) !== wordChar)
      return false;
  }

  return true;
}

var findAndReplacePattern = function (words, pattern) {
  const ans = [];

  for (let i = 0; i < words.length; i++) {
    if (matchesPattern(words[i], pattern)) ans.push(words[i]);
  }

  return ans;
};

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
); // ["mee", "aqq"]
