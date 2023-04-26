// lc 101

// recursive
function checkSymmetry(leftSubtree, rightSubtree) {
  if (!leftSubtree && !rightSubtree) {
    return true;
  } else if (leftSubtree && rightSubtree) {
    return (
      leftSubtree.val === rightSubtree.val &&
      checkSymmetry(leftSubtree.left, rightSubtree.right) &&
      checkSymmetry(leftSubtree.right, rightSubtree.left)
    );
  }

  return false;
}

var isSymmetric = function (root) {
  return root === null || checkSymmetry(root.left, root.right);
};

// stacks
function isSymmetric(root) {
  if (!root) return true;

  const stack = [];
  stack.push(root.right);
  stack.push(root.left);

  while (stack.length) {
    const n1 = stack.pop();
    const n2 = stack.pop();

    if (!n1 && !n2) continue;

    if (!n1 || !n2 || n1.val !== n2.val) return false;

    stack.push(n1.left);
    stack.push(n2.right);
    stack.push(n1.right);
    stack.push(n2.left);
  }

  return true;
}
