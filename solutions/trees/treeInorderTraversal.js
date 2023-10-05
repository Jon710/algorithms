// l -> n -> r
var inorderTraversal = function (root) {
  if (!root) return [];
  let visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return visited;
};

// morris traversal -> O(n), space: O(1) by rewiring the null pointers
var inorderTraversal = function (root) {
  let node = root;
  const result = [];

  while (node) {
    if (!node.left) {
      result.push(node.val);
      node = node.right;
    } else {
      const pred = findPredecessor(node);

      if (pred.right === node) {
        pred.right = null;
        result.push(node.val);
        node = node.right;
      } else {
        pred.right = node;
        node = node.left;
      }
    }
  }

  return result;
};

function findPredecessor(root) {
  let node = root.left;

  while (node.right && node.right !== root) {
    node = node.right;
  }

  return node;
}
