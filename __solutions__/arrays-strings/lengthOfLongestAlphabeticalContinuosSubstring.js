/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
};
