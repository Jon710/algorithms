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
 * @return {number}
 */

var countUnivalSubtrees = function (root) {
  if (!root) return 0;

  let univalues = 0;

  function dfs(node) {
    if (!node.left && !node.right) {
      univalues++;
      return node.val;
    }

    const left = node.left ? dfs(node.left) : node.val;
    const right = node.right ? dfs(node.right) : node.val;

    if (node.val === left && node.val === right) {
      univalues++;
      return node.val;
    }

    return false;
  }

  dfs(root);

  return univalues;
};
