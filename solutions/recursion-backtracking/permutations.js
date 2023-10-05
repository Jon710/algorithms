/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutations = [];

  function backtrack(arr, currentPermutation) {
    if (currentPermutation.length === arr.length) {
      permutations.push(currentPermutation.slice());
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!currentPermutation.includes(arr[i])) {
        currentPermutation.push(arr[i]);
        backtrack(arr, currentPermutation);
        currentPermutation.pop();
      }
    }
  }

  backtrack(nums, []);

  return permutations;
};

console.log(permute([1, 2, 3]));

// Remember: every time currentPermutation is passed to backtrack, it is being passed by reference.
// It means that currentPermutation is the same array in all recursive calls of backtrack.
// So, if you push currentPermutation onto permutations without making it a new array, any changes to currentPermutation, like pushing or popping, will result in changes to all sub-arrays in permutations.
// Use slice on currentPermutation when pushing it onto results to avoid this.
