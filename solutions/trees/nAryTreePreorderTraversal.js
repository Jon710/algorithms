/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// preorder: node, left, right
var preorder = function (root) {
  const stack = [];
  const result = [];
  if (!root) return result;

  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return result;
};

// recursion
var preorder = function (root) {
  let visited = [];

  function traverse(root) {
    if (!root) return [];
    visited.push(root.val);
    for (let child of root.children) {
      traverse(child);
    }
  }

  traverse(root);
  return visited;
};
