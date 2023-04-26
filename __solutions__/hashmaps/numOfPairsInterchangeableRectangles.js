/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  const map = new Map();
  let ans = 0;

  for (let i = 0; i < rectangles.length; i++) {
    const currentRatio = rectangles[i][0] / rectangles[i][1];

    if (map.has(currentRatio)) ans += map.get(currentRatio);

    map.set(currentRatio, (map.get(currentRatio) || 0) + 1);
  }

  return ans;
};
