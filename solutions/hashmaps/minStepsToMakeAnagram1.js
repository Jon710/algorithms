/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  for (let key of sMap.keys()) {
    if (tMap.has(key)) {
      const diff = sMap.get(key) - tMap.get(key);

      if (diff > 0) count += diff;
    } else {
      count += sMap.get(key);
    }
  }

  return count;
};
