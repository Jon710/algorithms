/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];

  // by using ascii, we get capitalization by checking if its absolute value equals 32
  // 'j' - 'J' === 32, 'a' - 'A' === 32 and vice versa.
  for (let i = 0; i < s.length; i++) {
    if (
      stack.length &&
      Math.abs(s[i].charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};
