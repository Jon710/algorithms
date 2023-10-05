// nary tree. backtracking

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class TernaryTreePaths {
  constructor(root) {
    this.root = root;
  }

  dfs(root, currentPath, paths) {
    if (root.children.length === 0) {
      paths.push([...currentPath]);
      return;
    }

    for (let child of root.children) {
      if (child) {
        currentPath.push(child.val);
        this.dfs(child, currentPath, paths);
        currentPath.pop();
      }
    }
  }

  findPaths() {
    const paths = [];
    if (this.root) this.dfs(this.root, [this.root.val], paths);
    return paths;
  }
}

const nodes = {
  1: [2, 4, 6],
  2: [3],
  3: [],
  4: [],
  6: [],
};

function buildTree(node) {
  const childNodes = [];

  for (let nodeValue of nodes[node]) {
    childNodes.push(buildTree(nodeValue));
  }

  const currentNode = new Node(node, childNodes);
  return currentNode;
}

// console.log(buildTree(1));

const paths = new TernaryTreePaths(buildTree(1));
console.log(paths.findPaths());
