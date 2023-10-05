/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = new Map([
    ["b", 0],
    ["a", 0],
    ["l", 0],
    ["o", 0],
    ["n", 0],
  ]);

  for (char of text) {
    map.set(char, map.get(char) + 1);
  }

  const min = Math.min(
    map.get("b"),
    map.get("a"),
    map.get("l") / 2,
    map.get("o") / 2,
    map.get("n")
  );

  return Math.floor(min);
};
