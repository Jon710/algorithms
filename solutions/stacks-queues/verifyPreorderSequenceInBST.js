// monotonic stack
var verifyPreorder = function (preorder) {
  const stack = [];
  let min = -Infinity;

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] < min) return false;
    while (stack.length && stack[stack.length - 1] < preorder[i]) {
      min = stack.pop();
    }
    stack.push(preorder[i]);
  }

  return true;
};
