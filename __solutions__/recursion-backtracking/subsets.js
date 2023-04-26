// tc: O(n2ˆn)
function subsets(nums) {
  const subsets = [];
  const currentSubset = [];

  function backtrack(currentLevel) {
    if (currentLevel === nums.length) {
      subsets.push([...currentSubset]);
      return;
    } else {
      currentSubset.push(nums[currentLevel]);
      backtrack(currentLevel + 1);
      currentSubset.pop();
      backtrack(currentLevel + 1);
    }
  }

  backtrack(0);

  return subsets;
}
