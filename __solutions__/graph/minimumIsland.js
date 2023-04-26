const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

function explore(grid, r, c, visited) {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === "W") return 0;

  if (visited.has([r, c].toString())) return 0;

  visited.add([r, c].toString());

  let size = 1;

  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);

  return size;
}

function minimumIsland(grid) {
  const visited = new Set();
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const currentSize = explore(grid, r, c, visited);
      if (currentSize > 0) minSize = Math.min(minSize, currentSize);
    }
  }

  return minSize;
}

console.log(minimumIsland(grid));
