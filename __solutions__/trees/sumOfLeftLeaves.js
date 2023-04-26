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
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  } else if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right);
  } else {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
};

// We check if left node is a leaf by checking that it doesn't have left and right nodes (!node.left.left && !node.left.right) and do sum.
var sumOfLeftLeaves = function (root) {
  let stack = [root];
  let sum = 0;
  while (stack.length) {
    const node = stack.pop();

    if (node.left) {
      if (!node.left.left && !node.left.right) sum += node.left.val;
      stack.push(node.left);
    }

    if (node.right) stack.push(node.right);
  }

  return sum;
};
