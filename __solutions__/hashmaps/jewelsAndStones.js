var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  const map = new Map();

  for (let i = 0; i < jewels.length; i++) {
    map.set(jewels[i], i);
  }

  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) count++;
  }

  return count;
};
