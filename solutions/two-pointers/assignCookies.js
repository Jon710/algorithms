/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let gPtr = g.length - 1;
  let sPtr = s.length - 1;
  let contentChildren = 0;

  while (gPtr >= 0 && sPtr >= 0) {
    if (s[sPtr] >= g[gPtr]) {
      contentChildren++;
      sPtr--;
      gPtr--;
    } else {
      gPtr--;
    }
  }

  return contentChildren;
};
