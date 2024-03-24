// lc 104
// think of a movie theater.
const { createTreeFromArray } = require("../../helpers");

// ask which row someone is, until it reaches the first. then eventually it propagates back to us. (Kevin Naughton)
var maxDepth = function (root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

var maxDepth2 = function (root) {
  if (!root) return 0;

  let ans = 1;

  function inorder(node, currentPath = 0) {
    currentPath += 1;

    if (node.left) inorder(node.left, currentPath);
    ans = Math.max(currentPath, ans);
    if (node.right) inorder(node.right, currentPath);
  }

  inorder(root);

  return ans;
};

const arr = [3, 9, 20, null, null, 15, 7];
const root = createTreeFromArray(arr);
console.log(maxDepth(root));
