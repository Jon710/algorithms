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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];

  if (!root) return paths;

  function dfs(node, path, paths) {
    path += node.val;

    if (!node.left && !node.right) {
      paths.push(path);
      return;
    }

    if (node.left) dfs(node.left, path + "->", paths);
    if (node.right) dfs(node.right, path + "->", paths);
  }

  dfs(root, "", paths);
  return paths;
};
