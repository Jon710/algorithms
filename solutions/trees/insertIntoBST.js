// lc 701
// REVISAR
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);

  if (!root) return newNode;

  let current = root;
  let previous = null;

  while (current) {
    if (val > current.val) {
      previous = current;
      current = current.right;
    } else {
      previous = current;
      current = current.left;
    }
  }

  if (val < previous.val) previous.left = newNode;
  else previous.right = newNode;

  return root;
};
