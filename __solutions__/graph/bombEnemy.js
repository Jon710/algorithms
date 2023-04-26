/**
 * @param {character[][]} grid
 * @return {number}
 */
// var maxKilledEnemies = function(grid) {
//     if (!grid.length) return 0;

//     function bfs(grid, r, c) {
//         let currentEnemies = 0;
//         const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // down, up, left, right

//         for (let [currentRow, currentCol] of directions) {
//             let newRow = r, newCol = c;
//             while (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
//                 if (grid[newRow][newCol] === 'E') currentEnemies++;
//                 if (grid[newRow][newCol] === 'W') break;
//                 newRow = newRow + currentRow;
//                 newCol = newCol + currentCol;
//             }
//         }

//         return currentEnemies;
//     }

//     let maxEnemies = 0;

//     for (let r = 0; r < grid.length; r++) {
//         for (let c = 0; c < grid[0].length; c++) {
//             if (grid[r][c] === '0') {
//                 maxEnemies = Math.max(bfs(grid, r, c), maxEnemies);
//             };
//         }
//     }

//     return maxEnemies;
// };

var maxKilledEnemies = function (grid) {
  function checkRowCol([row, col], [rowIncrement, colIncrement]) {
    let num = 0;

    while (
      row < grid.length &&
      col < grid[0].length &&
      grid[row][col] !== "W"
    ) {
      if (grid[row][col] === "E") num++;
      row += rowIncrement;
      col += colIncrement;
    }

    return num;
  }

  let res = 0,
    rowCount = 0,
    colCount = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "W") continue;
      if (!col || grid[row][col - 1] === "W")
        rowCount = checkRowCol([row, col], [0, 1]);
      if (!row || grid[row - 1][col] === "W")
        colCount[col] = checkRowCol([row, col], [1, 0]);
      if (grid[row][col] === "0") res = Math.max(res, rowCount + colCount[col]);
    }
  }

  return res;
};
