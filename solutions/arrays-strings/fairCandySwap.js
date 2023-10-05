/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  // this is a math problem: there's a formula for solving it
  const set = new Set(bobSizes);
  let aliceTotal = 0;
  let bobTotal = 0;

  for (let i = 0; i < aliceSizes.length; i++) {
    aliceTotal += aliceSizes[i];
  }

  for (let i = 0; i < bobSizes.length; i++) {
    bobTotal += bobSizes[i];
  }

  const diff = (bobTotal - aliceTotal) / 2;

for (let i = 0; i < aliceSizes.length; i++) {
    if (set.has(diff + aliceSizes[i]))
      return [aliceSizes[i], diff + aliceSizes[i]];
  }
};
