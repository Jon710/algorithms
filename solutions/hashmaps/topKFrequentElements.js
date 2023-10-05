var topKFrequent = function (nums, k) {
  const map = new Map();
  const ans = [];
  const buckets = [];

  for (let i = 0; i <= nums.length; i++) buckets.push([]);

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // push into buckets by frequency
  for (let [key, value] of map) {
    buckets[value].push(key);
  }

  // fetch largest frequent bucket first, up to k
  for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
    if (buckets[i]) ans.push(...buckets[i]);
  }

  return ans;
};
