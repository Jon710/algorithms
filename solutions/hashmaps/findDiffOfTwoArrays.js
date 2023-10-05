/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  for (const num of nums1) {
    if (nums2.has(num)) {
      nums1.delete(num);
      nums2.delete(num);
    }
  }

  return [Array.from(nums1), Array.from(nums2)];
};
