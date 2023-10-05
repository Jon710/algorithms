var postorder = function (root) {
  let visited = [];

  function traverse(root) {
    if (!root) return [];
    for (let child of root.children) {
      traverse(child);
    }
    visited.push(root.val);
  }

  traverse(root);
  return visited;
};
 