/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    // take advantage of previous and next being falsy values when they are outside of the array or equal to zero
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      n--;

      if (n === 0) return true;
    }
  }

  return n <= 0;
};
