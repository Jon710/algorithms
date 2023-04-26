/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    const rows = new Set();
    const cols = new Set();
    for (let j = 0; j < n; j++) {
      if (rows.has(matrix[i][j])) return false;
      if (cols.has(matrix[j][i])) return false;

      rows.add(matrix[i][j]);
      cols.add(matrix[j][i]);
    }
  }

  return true;
};
