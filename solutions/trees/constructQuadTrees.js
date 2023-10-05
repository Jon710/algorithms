// https://medium.com/@KevinBGreene/data-structures-in-typescript-quad-trees-466ef6f338d2
// https://www.youtube.com/watch?v=kClPBNmTCf0&list=PLliXPok7Zonm0trweRA2UeSTTLVYiPzNG&index=4 keerti purswani is good too
var construct = function (grid) {
  const constructQuadTree = (row, col, size) => {
    if (size <= 0) return null;

    const start = grid[row][col];

    for (let a = row; a < row + size; a++) {
      for (let b = col; b < col + size; b++) {
        const current = grid[a][b];

        if (start === current) continue;

        const divide = size / 2;
        const topL = constructQuadTree(row, col, divide);
        const topR = constructQuadTree(row, col + divide, divide);
        const bottomL = constructQuadTree(row + divide, col, divide);
        const bottomR = constructQuadTree(row + divide, col + divide, divide);

        return new Node(true, false, topL, topR, bottomL, bottomR);
      }
    }

    return new Node(start === 1, true, null, null, null, null);
  };

  return constructQuadTree(0, 0, grid.length);
};
