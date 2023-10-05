var isBalanced = function (root) {
  if (!root) return true;

  function dfs(root) {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    return Math.max(left, right) + 1;
  }

  if (Math.abs(dfs(root.left) - dfs(root.right)) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right); // continue dfs
};
