/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
  let appendedNum = 1;
  let sum = 0;
  const set = new Set(nums);

  while (k !== 0) {
    if (set.has(appendedNum)) {
      appendedNum++;
      continue;
    }

    k--;
    sum += appendedNum;
    appendedNum++;
  }

  return sum;
};
