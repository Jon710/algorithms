// lc 242
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 0);
    }

    if (!map.has(t[i])) {
      map.set(t[i], 0);
    }

    map.set(s[i], map.get(s[i]) + 1);
    map.set(t[i], map.get(t[i]) - 1);
  }

  for (const value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
};
