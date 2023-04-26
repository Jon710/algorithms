class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function treeIncludesBFS(root, target) {
  if (!root) return false;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
}

function treeIncludesDFS(root, target) {
  if (!root) return false;

  if (root.val === target) return true;

  return (
    treeIncludesDFS(root.left, target) || treeIncludesDFS(root.right, target)
  );
}

console.log(treeIncludesBFS(a, "e"));
console.log(treeIncludesDFS(a, "e"));
