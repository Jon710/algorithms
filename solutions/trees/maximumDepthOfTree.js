// lc 104
// think of a movie theater.
// ask which row someone is, until it reaches the first. then eventually it propagates back to us. (Kevin Naughton)
var maxDepth = function (root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};
