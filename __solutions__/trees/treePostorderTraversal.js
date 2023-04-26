// l -> r -> n
var postorderTraversal = function (root) {
  if (!root) return [];
  let visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.val);
  }

  traverse(root);
  return visited;
};

// iteratively using stacks
var postorderTraversal = function (root) {
  if (!root) return [];

  let visited = [];
  const stack = [root];

  while (stack.length) {
    let node = stack.pop();

    visited.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return visited;
};
