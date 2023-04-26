/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
function findClosest(root, target, diff, currentClosest) {
  if (!root) return currentClosest;

  if (Math.abs(target - root.val) < diff) {
    diff = Math.abs(target - root.val);
    currentClosest = root.val;
  }

  if (target > root.val) {
    return findClosest(root.right, target, diff, currentClosest);
  } else {
    return findClosest(root.left, target, diff, currentClosest);
  }
}

var closestValue = function (root, target) {
  return findClosest(root, target, Infinity, root.val);
};
