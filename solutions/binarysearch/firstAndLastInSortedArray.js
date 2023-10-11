// lc 34 - reference: Michael Muinos yt
var searchRange = function (nums, target) {
  const first = findFirst(nums, target);
  if (first === -1) return [-1, -1];
  const last = findLast(nums, target, first);
  return [first, last];

  function findFirst(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let firstIndex = -1;

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] >= target) {
        if (nums[mid] === target) firstIndex = mid;

        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return firstIndex;
  }

  function findLast(nums, target, first) {
    let left = first;
    let right = nums.length - 1;
    let lastIndex = first;

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] <= target) {
        if (nums[mid] === target) lastIndex = mid;

        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return lastIndex;
  }
};

console.log(searchRange([2, 4, 6, 8, 8, 11, 13], 8));
