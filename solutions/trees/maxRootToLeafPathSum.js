// https://www.youtube.com/watch?v=fAAZixBzIAI&t=1s
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new Node(3);
const b = new Node(19);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function maxRootToLeafPathSum(root) {
  if (!root) return -Infinity;

  if (!root.left && !root.right) return root.val;

  const maxChildPathSum = Math.max(
    maxRootToLeafPathSum(root.left),
    maxRootToLeafPathSum(root.right)
  );

  return root.val + maxChildPathSum;
}

console.log(maxRootToLeafPathSum(a));
