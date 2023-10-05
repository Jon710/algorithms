/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const elements = [];
  const size = matrix.length * matrix[0].length;
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (elements.length < size) {
    // go left to right
    for (let i = left; i <= right && elements.length < size; i++) {
      elements.push(matrix[top][i]); // same row (top), different column (i)
    }
    top++;

    // go top to bottom
    for (let i = top; i <= bottom && elements.length < size; i++) {
      elements.push(matrix[i][right]); // different row (i), same column (right)
    }
    right--;

    // go right to left
    for (let i = right; i >= left && elements.length < size; i--) {
      elements.push(matrix[bottom][i]); // same row bottom, different column i
    }
    bottom--;

    // go bottom to top
    for (let i = bottom; i >= top && elements.length < size; i--) {
      elements.push(matrix[i][left]); // different row i, same column left
    }
    left++;
  }

  return elements;
};
