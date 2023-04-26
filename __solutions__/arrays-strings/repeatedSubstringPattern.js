/**
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function(s) {
//     let str = s + s;
//     let newStr = str.substring(1, str.length - 1);

//     if (newStr.includes(s)) {
//         return true;
//     } else {
//         return false;
//     }
// };

// KMP algorithm for pattern searching
var repeatedSubstringPattern = function (s) {
  const lps = [0];
  let i = 1,
    len = 0;

  while (i < s.length) {
    if (s[i] === s[len]) {
      i++;
      len++;
      lps.push(len);
    } else if (len > 0) {
      len = lps[len - 1];
    } else {
      i++;
      lps.push(0);
    }
  }

  const lastLPS = lps[lps.length - 1];
  const prefixLen = s.length - lastLPS;

  if (!lastLPS) return false;
  return s.length % prefixLen === 0;
};
