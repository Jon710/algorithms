/**
 * @param {character[][]} grid
 * @return {number}
 */
function dfs(grid, i, j) {
  // top, bottom, left and right bounds
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  )
    return 0;

  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);

  return 1;
}

var numIslands = function (grid) {
  if (!grid) return 0;

  let islands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") islands += dfs(grid, row, col);
    }
  }

  return islands;
};

// bfs
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islands++;

        // sink the island by setting it's parts to "0"
        bfs(grid, i, j);
      }
    }
  }

  return islands;
};

function bfs(grid, i, j) {
  let rows = grid.length;
  let cols = grid[0].length;
  let queue = [[i, j]];

  while (queue.length) {
    let [currRow, currCol] = queue.shift();

    if (
      currRow < 0 ||
      currRow === rows ||
      currCol < 0 ||
      currCol === cols ||
      grid[currRow][currCol] === "0"
    )
      continue;

    if (grid[currRow][currCol] === "1") grid[currRow][currCol] = "0"; // mark as visited

    // looks in all directions if found an island add it to the queue to sink it
    queue.push([currRow + 1, currCol]);
    queue.push([currRow - 1, currCol]);
    queue.push([currRow, currCol + 1]);
    queue.push([currRow, currCol - 1]);
  }
}
