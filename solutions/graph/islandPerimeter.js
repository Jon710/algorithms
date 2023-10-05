/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const visited = new Set();

  function dfs(i, j) {
    let perimeter = 0;

    // cases in which we reach out of bounds
    if (
      i >= grid.length ||
      j >= grid[0].length ||
      i < 0 ||
      j < 0 ||
      grid[i][j] === 0
    )
      return 1;

    if (visited.has([i, j].toString())) return 0;

    // JS Set for Array values works by reference and not by value.
    // To overcome this issue, we have to convert the array to a string.
    visited.add([i, j].toString());

    perimeter += dfs(i, j + 1);
    perimeter += dfs(i + 1, j);
    perimeter += dfs(i, j - 1);
    perimeter += dfs(i - 1, j);

    return perimeter;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return dfs(i, j);
    }
  }
};
