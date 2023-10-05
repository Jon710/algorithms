//lc 566
var matrixReshape = function (mat, r, c) {
  const reshaped = new Array(r).fill(0).map(() => new Array(c).fill(0));

  if (mat.length * mat[0].length !== r * c) return mat;

  let row = 0;
  let col = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      reshaped[row][col] = mat[i][j];
      col++;
      if (col === c) {
        row++;
        col = 0;
      }
    }
  }

  return reshaped;
};
