/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function convert(left, right) {
    if (left > right) return null;

    let mid = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = convert(left, mid - 1);
    root.right = convert(mid + 1, right);
    return root;
  }

  return convert(0, nums.length - 1);
};
