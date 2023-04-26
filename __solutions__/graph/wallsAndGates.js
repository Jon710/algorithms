// multisource bfs as it starts from the gates (0), not empty rooms (INF)
const INF = 2 ** 31 - 1;
const directions = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
]; // up, down, left, right

var wallsAndGates = function (rooms) {
  const m = rooms.length;
  const n = rooms[0].length;
  const queue = [];

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (rooms[r][c] === 0) queue.push([r, c]);
    }
  }

  while (queue.length) {
    const [currRow, currCol] = queue.shift();

    for (let [dr, dc] of directions) {
      const newRow = currRow + dr;
      const newCol = currCol + dc;

      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= m ||
        newCol >= n ||
        rooms[newRow][newCol] !== INF
      )
        continue;

      rooms[newRow][newCol] = rooms[currRow][currCol] + 1;
      queue.push([newRow, newCol]);
    }
  }
};

// TLE dfs
// function wallsAndGates(rooms) {
//     for (let r = 0; r < rooms.length; r++) {
//         for (let c = 0; c < rooms[r].length; c++) {
//             if (rooms[r][c] === 0) dfs(r, c, 0, rooms);
//         }
//     }
// }

// function dfs(r, c, dist, rooms) {
//     if (r < 0 || r >= rooms.length || c < 0 || c >= rooms[r].length || rooms[r][c] < dist) return;

//     rooms[r][c] = dist;

//     dfs(r + 1, c, dist + 1, rooms);
//     dfs(r - 1, c, dist + 1, rooms);
//     dfs(r, c + 1, dist + 1, rooms);
//     dfs(r, c - 1, dist + 1, rooms);
// }
