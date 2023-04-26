var lengthOfLongestSubstringTwoDistinct = function (s) {
  let longest = 0;
  let windowStart = 0;
  let map = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    map.set(s[windowEnd], (map.get(s[windowEnd]) || 0) + 1);

    while (map.size > 2) {
      map.set(s[windowStart], map.get(s[windowStart]) - 1);

      // remove the character if it doesn't appear in our substring anymore
      if (map.get(s[windowStart]) === 0) map.delete(s[windowStart]);

      windowStart++;
    }

    longest = Math.max(longest, windowEnd - windowStart + 1);
  }

  return longest;
};
