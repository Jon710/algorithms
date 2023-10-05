// lc 74

// o(nˆ2)
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const currentValue = matrix[i][j];

      if (currentValue === target) return true;
    }
  }

  return false;
};

// binary search on a 2d array
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;

  let rows = matrix.length;
  let cols = matrix[0].length;

  let low = 0;
  let high = rows * cols - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (matrix[Math.floor(mid / cols)][mid % cols] === target) {
      return true;
    } else if (matrix[Math.floor(mid / cols)][mid % cols] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};
