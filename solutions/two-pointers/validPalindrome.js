/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // ^ represents a negated set (matches any char that is not in the set. in this case 0-9 and a-z)
  const newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");

  let start = 0;
  let end = newStr.length - 1;

  while (start <= end) {
    if (newStr[start] !== newStr[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};
