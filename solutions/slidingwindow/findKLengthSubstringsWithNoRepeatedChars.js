// lc 1100
// set
var numKLenSubstrNoRepeats = function (s, k) {
  if (k > s.length) return 0;

  let left = 0;
  let ans = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    if (set.size > k) {
      set.delete(s[left]);
      left++;
    }

    if (set.size === k) ans++;
  }

  return ans;
};

// map
var numKLenSubstrNoRepeats = function (s, k) {
  if (k > s.length) return 0;

  let left = 0;
  let right = 0;
  let ans = 0;
  const map = new Map();

  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.get(s[right]) === 2) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    if (right - left + 1 === k) {
      ans++;
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    right++;
  }

  return ans;
};
