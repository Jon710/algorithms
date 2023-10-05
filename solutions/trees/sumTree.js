class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      3
//    /   \
//   2     7
//  /  \     \
// 4   -2     5

const sumTree = (root) => {
  if (!root) return 0;
  return sumTree(root.left) + root.val + sumTree(root.right);
};

function sumTreeBFS(root) {
  if (!root) return 0;

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();
    sum += current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
}

console.log(sumTree(a));
console.log(sumTreeBFS(a));
