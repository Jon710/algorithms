/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  if (!strs) return prefix;

  let idx = 0;
  for (let char of strs[0].split("")) {
    for (let i = 1; i < strs.length; i++) {
      if (idx >= strs[i].length || char !== strs[i].charAt(idx)) {
        return prefix;
      }
    }

    prefix = prefix + char;
    idx++;
  }

  return prefix;
};
