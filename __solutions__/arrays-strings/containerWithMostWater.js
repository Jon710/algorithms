/**
 * @param {number[]} height
 * @return {number}
 */
// two pointer approach o(n)
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    let currentArea = (right - left) * smallestSide;

    maxArea = Math.max(currentArea, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
