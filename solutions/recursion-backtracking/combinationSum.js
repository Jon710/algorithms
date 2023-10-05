function combinationSum(candidates, target) {
  const possibleCombination = [];
  const combinations = [];

  function findCombinations(idx, target) {
    if (target === 0) return combinations.push([...possibleCombination]);
    if (target < 0) return;
    if (idx === candidates.length) return;
    possibleCombination.push(candidates[idx]);
    findCombinations(idx, target - candidates[idx]);
    possibleCombination.pop();
    findCombinations(idx + 1, target);
  }

  findCombinations(0, target);

  return combinations;
}

console.log(combinationSum([2, 3, 6, 7], 7));
