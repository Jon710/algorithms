// sliding window
var findAnagrams = function (s, p) {
  const result = [];
  const map = new Map();
  let charCount = p.length;

  for (let i = 0; i < p.length; i++) {
    map.set(p[i], map.get(p[i]) + 1 || 1);
  }

  let left = 0,
    right = 0;

  while (right < s.length) {
    // If we find a match and the map still has values for this character, we decrement the anagram charCount - we are one step closer to an anagram
    if (map.get(s[right]) > 0) charCount--;

    //If this character exists in the map, we decrement the total value and increment our right pointer.
    if (map.has(s[right])) map.set(s[right], map.get(s[right]) - 1);

    right++;

    //If the charCount is zero, that means an anagram has been located -- push the index
    if (charCount === 0) result.push(left);

    //if pointers equal the length of p, it means the anagram length has been reached and we must move the left pointer.
    //We also must check to see if the left pointer currently has an anagram value - if it does, we increment the charCount and the map, 'restoring' the value for further iterations
    if (right - left === p.length) {
      if (map.get(s[left]) >= 0) charCount++;

      if (map.has(s[left])) map.set(s[left], map.get(s[left]) + 1);

      left++;
    }
  }

  return result;
};
