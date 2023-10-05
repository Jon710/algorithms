// lc 144
// pre: node (root) -> left -> right
var preorderTraversal = function (root) {
  if (!root) return [];
  let visited = [];

  function traverse(node) {
    visited.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return visited;
};

// iteratively (using stack)
var preorderTraversal = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};
