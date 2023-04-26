function dfs(root) {
  if (!root) return null;

  const stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    console.log(currentNode.val);

    if (currentNode.right) stack.push(currentNode.right);

    if (currentNode.left) stack.push(currentNode.left);
  }
}

function recursiveDfs(root) {
  if (!root) return null;

  console.log(root.val);
  recursiveDfs(root.left);
  recursiveDfs(root.right);
}

module.exports = { dfs, recursiveDfs };
// https://algo.monster/problems/serializing_tree
