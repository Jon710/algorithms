/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  const backtrack = (idx, seen) => {
    if (idx === s.length) return seen.size;

    let max = 0;
    for (let i = idx + 1; i <= s.length; i++) {
      const substring = s.substring(idx, i);

      if (!seen.has(substring)) {
        seen.add(substring);
        max = Math.max(max, backtrack(i, seen));
        seen.delete(substring);
      }
    }

    return max;
  };

  return backtrack(0, new Set());
};

console.log(maxUniqueSplit("ababccc")); // 5
