// lc 59 - Fisher Coder has a good solution
// good ref: https://www.youtube.com/watch?v=1ZGJzvkcLsA tech dose
var generateMatrix = function (n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill());

  if (n === 0) return matrix;

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let element = 1;

  // boundaries
  while (left <= right && top <= bottom) {
    // we go left to right
    for (let j = left; j <= right; j++) {
      matrix[top][j] = element++;
    }
    top++;

    // we go top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = element++;
    }
    right--;

    for (let j = right; j >= left; j--) {
      matrix[bottom][j] = element++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = element++;
    }
    left++;
  }

  return matrix;
};
