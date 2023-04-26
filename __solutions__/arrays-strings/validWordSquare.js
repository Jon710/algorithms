/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i].length;
    for (let j = 0; j < word; j++) {
      if (!words[j] || words[i][j] !== words[j][i]) return false;
    }
  }
  return true;
};
