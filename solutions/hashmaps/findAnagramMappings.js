/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function (nums1, nums2) {
  const mapping = [];
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], i);
  }

  for (let i = 0; i < nums1.length; i++) {
    mapping[i] = map.get(nums1[i]);
  }

  return mapping;
};
