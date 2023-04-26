// https://www.youtube.com/watch?v=wjkKd5yBxRA
var isValidSudoku = function (board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const currentCell = board[i][j];

      if (currentCell === ".") continue;

      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const row = `row: ${i}, value ${currentCell}`;
      const col = `col: ${j}, value ${currentCell}`;
      const box = `box: ${boxNum}, value ${currentCell}`;

      if (set.has(row) || set.has(col) || set.has(box)) return false;

      set.add(row);
      set.add(col);
      set.add(box);
    }
  }

  return true;
};

// "brute force" solution because it translates the intuition to code, not because of time complexity
var isValidSudoku = function (board) {
  // check rows
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  // check cols
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[j][i];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  // check inner 3x3 boxes
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l];
          if (cell === ".") continue;
          if (set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }

  return true;
};
