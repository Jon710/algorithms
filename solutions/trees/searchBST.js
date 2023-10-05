// lc 700
// BST -> values less than root go left, values higher than root go right
var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
