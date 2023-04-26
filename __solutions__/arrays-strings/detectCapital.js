/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let capitals = 0;

  for (let i = 0; i < word.length; i++) {
    // 65 to 90 is uppercase
    if (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) {
      capitals = capitals + 1;
    }
  }

  return (
    capitals === word.length ||
    capitals === 0 ||
    (capitals === 1 && word.charCodeAt(0) > 64 && word.charCodeAt(0) < 91)
  );
};
