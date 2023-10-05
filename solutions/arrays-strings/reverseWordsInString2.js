// lc 186
// easy to understand by debugging
var reverseWords = function (str) {
  if (str === null || str.length === 0) return;

  // reverse entire string
  str.reverse();

  // 2 pointers to mark each word
  let start = 0;
  let end = 0;

  while (end <= str.length) {
    if (str[end] === " " || end === str.length) {
      let left = start;
      let right = end - 1;
      // reverse each word
      while (left < right) {
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
      }
      start = end + 1;
    }
    end++;
  }
};
