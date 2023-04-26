/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const map = new Map();
  let left = 0;
  let right = 9;

  map.set(s.slice(left, right + 1), 1);

  while (right < s.length) {
    left++;
    right++;

    if (map.has(s.slice(left, right + 1))) {
      map.set(s.slice(left, right + 1), map.get(s.slice(left, right + 1)) + 1);
    } else {
      map.set(s.slice(left, right + 1), 1);
    }
  }

  const ans = [];

  for (let [key, value] of map) {
    if (value > 1) ans.push(key);
  }

  return ans;
};
