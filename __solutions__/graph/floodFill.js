/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 function dfs(image, i, j, color, newColor) {
  // top, bottom, left and right bounds
  if (i < 0 || i >= image.length || j < 0 || j >= image[i].length || image[i][j] !== color) return;
  
  image[i][j] = newColor;
  dfs(image, i + 1, j, color, newColor);
  dfs(image, i - 1, j, color, newColor);
  dfs(image, i, j + 1, color, newColor);
  dfs(image, i, j - 1, color, newColor);
}

var floodFill = function(image, sr, sc, color) {
  if (image[sr][sc] === color) return image;

  dfs(image, sr, sc, image[sr][sc], color);

  return image;
};