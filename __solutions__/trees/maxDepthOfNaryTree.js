/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDepth = 1;

  function dfs(node, depth) {
    if (!node) return;

    maxDepth = Math.max(maxDepth, depth);

    for (let child of node.children) {
      dfs(child, depth + 1);
    }
  }

  dfs(root, 1);

  return maxDepth;
};
