// substring -> sliding window
// size 3 -> fixed size
// distinct chars -> set
var countGoodSubstrings = function (s) {
  const map = new Map();
  let ans = 0;
  let left = 0,
    right = 0;

  while (left < s.length && right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    if (right - left + 1 < 3) {
      right++;
    } else if (map.size === 3) {
      ans++;
      map.delete(s[left]);
      left++;
      right++;
    } else {
      map.set(s[left], map.get(s[left]) - 1);

      if (map.get(s[left]) === 0) map.delete(s[left]);

      left++;
      right++;
    }
  }

  return ans;
};

// same complexity, but taking advantage of a Set
function countGoodSubstrings(s) {
  let ans = 0;

  for (let i = 0; i < s.length - 2; i++) {
    const window = [s[i], s[i + 1], s[i + 2]];
    const set = new Set(window);

    if (set.size === 3) ans++;
  }

  return ans;
}
