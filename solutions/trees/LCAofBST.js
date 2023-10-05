// recursive
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);

  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);

  return root;
};

// iterative
var lowestCommonAncestor = function (root, p, q) {
  let node = root;

  while (node) {
    if (p.val > node.val && q.val > node.val) node = node.right;
    else if (p.val < node.val && q.val < node.val) node = node.left;
    else return node;
  }

  return null;
};
