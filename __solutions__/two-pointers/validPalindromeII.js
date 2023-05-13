/**
 * @param {string} s
 * @return {boolean}
 */
function checkPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) return false;

    start++;
    end--;
  }

  return true;
}

var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        checkPalindrome(s, start, end - 1) || checkPalindrome(s, start + 1, end)
      );
    }

    start++;
    end--;
  }

  return true;
};
