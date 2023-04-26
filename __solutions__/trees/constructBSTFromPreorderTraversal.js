/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let i = 0;

  function construct(upperBound) {
    if (preorder.length === i || preorder[i] > upperBound) return null;

    let root = new TreeNode(preorder[i]);
    i++;
    root.left = construct(root.val);
    root.right = construct(upperBound);
    return root;
  }

  return construct(Infinity);
};
