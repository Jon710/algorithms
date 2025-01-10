// you are on a budgeted road trip through a country with a grid of cities. Each city is represented by a cell in a 2d grid, and the value in each cell indicates the cost of staying in
// that city for a day. You start the top-left corner of the grid (0,0), always staying the first day in that city. You also start with a given amount of money, and your goal is to reach
// the bottom-right corner (n-1, m-1) which has a cost of 0 since it's your final destination.
// You can only make one move per day, and you can move right, down, or diagonally right-down at each step. Write an algorithm to find the minimum total cost, so you can maximize your remaining budget,
// from the top-left to the bottom-right corner. If you cannot reach the final destination with the given amount of money, return -1.
/**
 * Entrada:
 *  - input (object)
 *    - grid (array)
 *    - amount (number)
 *
 * Saída: number
 **/
// EXAMPLES:
// Input: grid = [[1,3,1], [1,5,1], [4,2,0]] amount = 10

/**
 * Entrada:
 *  - input (object)
 *    - grid (array)
 *    - amount (number)
 *
 * Saída: number
 **/
export function findMinCost({ grid, amount }) {
  const n = grid.length;
  const m = grid[0].length;

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [1, 1], // diagonally right-down
  ];

  const cost = Array.from({ length: n }, () => Array(m).fill(Infinity));
  cost[0][0] = grid[0][0];

  const queue = [{ x: 0, y: 0, currentCost: grid[0][0] }]; // BFS

  while (queue.length > 0) {
    const { x, y, currentCost } = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return currentCost <= amount ? amount - currentCost : -1;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        const newCost = currentCost + grid[nx][ny];

        if (newCost < cost[nx][ny]) {
          cost[nx][ny] = newCost;
          queue.push({ x: nx, y: ny, currentCost: newCost });
        }
      }
    }
  }

  return -1;
}
