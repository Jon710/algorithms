// Amazon has multiple delivery centers and delivery warehouses all over the world. The world is represented by a number line from -10ˆ9 to 10ˆ9.
// There are n delivery centers, the ith one at location center[i]. A location x is called a suitable location for a warehouse if it is possible to bring all the products to that point by traveling a distance of no more than d.
// At any one time, products can be brought from one delivery center and placed at point x. Given the positions of n delivery centers, calculate the number of suitable locations in the world.
// That is, calculate the number of points x on the number line (-10ˆ9 <= x <= 10ˆ9) where the travel distance required to bring all the products to that point is less than or equal to d.
// Note: the distance between point x and center[i] is | x - center[i]|, their absolute difference.
function suitableWareHouses(points, d) {
  // Helper function to check if a given point is suitable
  function feasible(mid) {
    let total = 0;
    for (let point of points) {
      total += Math.abs(mid - point) * 2;
    }
    return total <= d;
  }

  // Binary search to find the rightmost suitable warehouse point
  function binarySearchRight(start, end) {
    let low = start;
    let high = end;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (feasible(mid)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low - 1;
  }

  // Binary search to find the leftmost suitable warehouse point
  function binarySearchLeft(start, end) {
    let low = start;
    let high = end;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (feasible(mid)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  const suitablePoints = [];

  // Find the rightmost suitable warehouse point
  const rightLimit = binarySearchRight(0, Math.max(...points) + d);

  // Find the leftmost suitable warehouse point
  const leftLimit = binarySearchLeft(Math.min(...points) - d, -1);

  // All the integer points between leftmost and rightmost points are also suitable
  for (let i = leftLimit; i <= rightLimit; i++) {
    suitablePoints.push(i);
  }

  return suitablePoints;
}

// Example usage:
let points = [1, 5, 9];
let d = 10;
// let points = [-2, 1, 0];
// let d = 8;
console.log(suitableWareHouses(points, d)); // Output the suitable warehouse points
