// lc 48

var rotate = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      console.log(r, c);
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }

  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// [[7,4,1],[8,5,2],[9,6,3]]
