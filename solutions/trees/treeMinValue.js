class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(0);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function treeMinValue(root) {
  const stack = [root];
  let min = Infinity;

  while (stack.length) {
    const current = stack.pop();

    min = Math.min(current.val, min);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return min;
}

function treeMinValueBFS(root) {
  const queue = [root];
  let min = Infinity;

  while (queue.length) {
    const current = queue.shift();

    min = Math.min(current.val, min);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return min;
}

function treeMinValueRecursive(root) {
  if (!root) return Infinity;
  const left = treeMinValueRecursive(root.left);
  const right = treeMinValueRecursive(root.right);
  return Math.min(root.val, left, right);
}

console.log(treeMinValue(a));
console.log(treeMinValueBFS(a));
console.log(treeMinValueRecursive(a));
