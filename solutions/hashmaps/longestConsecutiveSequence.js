/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    // it means it's the start of a sequence
    if (!set.has(num - 1)) {
      let currentLongest = 1;

      while (set.has(num + 1)) {
        num++;
        currentLongest++;
      }

      longest = Math.max(longest, currentLongest);
    }
  }

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
