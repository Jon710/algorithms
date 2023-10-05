/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const stackS = [];
  const stackT = [];

  for (let char of s) {
    if (char === "#") {
      stackS.pop(char);
    } else {
      stackS.push(char);
    }
  }

  for (let char of t) {
    if (char === "#") {
      stackT.pop(char);
    } else {
      stackT.push(char);
    }
  }

  return stackS.join("") === stackT.join("");
};
