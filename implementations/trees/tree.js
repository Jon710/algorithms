const bfs = require("../....//templates/bfsOnTree");
const { dfs, recursiveDfs } = require("../../../templates/dfsOnTree");

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

bfs(a);
dfs(a);
recursiveDfs(a);
