// Time complexity: O(s*w) in worst case.
// Space complexity: O(w)

var numMatchingSubseq = function (s, words) {
  const map = new Map();
  let ans = 0;

  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  for (const word of map.keys()) {
    let i = 0,
      j = 0;

    while (i < s.length && j < word.length) {
      if (word[j] === s[i]) j++;

      i++;
    }

    if (j === word.length) ans += map.get(word);
  }

  return ans;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"])); // 3
