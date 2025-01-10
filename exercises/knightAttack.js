// You are given:
// 1. a positive integer N, representing the size of an NxN chessboard
// 2. an array position of size 2 representing the initial position of a knight in the board ([X,Y]).
// 3. an array opponents containing the position of opponent pieces in the board. Each entry in the opponents array is an array of size 2 in the form [i, j] representing the coordinates of the opponent.
// 4. A positive integer 4 representing the maximum number of moves allowed for the knight.

// A knight in chess can move in an 'L' shape, i.e, two squares in one direction (horizontal or vertical) and one square in a perpendicular direction, allowing up to 8 moves.
// The goal is to compute the maximum number of opponent pieeces that the knight can capture in at most moves. Note that:
// - capturing occurs if the knight lands on a position containing an opponent piece
// - the knight cannot capture the same opponent more than once
// - the knight must stay within the board boundaries.

// Input -> an object containing: an integer N (size of the board), an array containing 2 positive integers [X,Y] (starting position of knight),
// a list opponents consisting of arrays having two positive integers (location of opponents pieces) and an integer K (max number of moves)
// Output: return the maximum number of opponent pieces that he knight can capture in at most K moves
function maxCaptures({ N, position, opponents, K }) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const opponentSet = new Set(opponents.map(([x, y]) => `${x},${y}`));
  const visited = new Set();
  let maxCaptures = 0;

  // Queue for BFS, stores [x, y, movesUsed, captures]
  const queue = [[position[0], position[1], 0, 0, new Set()]];

  while (queue.length > 0) {
    const [x, y, moves, captures, capturedSet] = queue.shift();
    maxCaptures = Math.max(maxCaptures, captures);

    if (moves === K) continue; // Stop if we've used up all moves

    for (let [dx, dy] of directions) {
      const nx = x + dx,
        ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue; // Skip if out of bounds

      // Convert position to a string for uniqueness
      const posKey = `${nx},${ny}`;
      const newCapturedSet = new Set(capturedSet);
      let newCaptures = captures;

      // If there's an opponent here and we haven't captured it before
      if (opponentSet.has(posKey) && !newCapturedSet.has(posKey)) {
        newCapturedSet.add(posKey);
        newCaptures++;
      }

      // Only add to queue if we haven't visited this state before
      const stateKey = `${nx},${ny},${moves + 1},${Array.from(
        newCapturedSet
      ).join("-")}`;
      if (!visited.has(stateKey)) {
        visited.add(stateKey);
        queue.push([nx, ny, moves + 1, newCaptures, newCapturedSet]);
      }
    }
  }

  return maxCaptures;
}

// Example usage
const input = {
  N: 5,
  position: [0, 0],
  opponents: [
    [2, 1],
    [4, 3],
    [3, 2],
  ],
  K: 4,
};

console.log(maxCaptures(input)); // Output will be the max captures possible
