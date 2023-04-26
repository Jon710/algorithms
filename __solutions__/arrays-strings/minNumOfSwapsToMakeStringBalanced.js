/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let extraClosing = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "]" ? extraClosing++ : extraClosing--;
    max = Math.max(max, extraClosing);
  }

  return Math.ceil(max / 2);
};
