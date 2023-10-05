// lc 240

var searchMatrix = function (matrix, target) {
  let rows = 0;
  let columns = matrix[0].length - 1;

  while (rows < matrix.length && columns >= 0) {
    if (matrix[rows][columns] === target) {
      return true;
    } else if (matrix[rows][columns] < target) {
      rows++;
    } else {
      columns--;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
