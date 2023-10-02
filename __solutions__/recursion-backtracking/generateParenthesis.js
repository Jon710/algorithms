/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];

  function backtrack(open, closed, current) {
    if (open + closed === 2 * n) {
      ans.push(current.join(""));
      return;
    }

    if (open < n) {
      current.push("(");
      backtrack(open + 1, closed, current);
      current.pop();
    }

    if (open > closed) {
      current.push(")");
      backtrack(open, closed + 1, current);
      current.pop();
    }
  }

  backtrack(0, 0, []);

  return ans;
};

console.log(generateParenthesis(3));
