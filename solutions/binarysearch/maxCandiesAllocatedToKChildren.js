/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  function canAllocate(pileSize) {
    let count = 0;

    for (let candyPile of candies) {
      count += Math.floor(candyPile / pileSize);
    }

    return count >= k;
  }

  let low = 1,
    high = Math.max(...candies);

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (canAllocate(mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
};

console.log(maximumCandies([2, 4, 6, 8, 10], 3));
console.log(maximumCandies([5, 8, 6], 3));
console.log(maximumCandies([4, 15, 6, 17], 3));
