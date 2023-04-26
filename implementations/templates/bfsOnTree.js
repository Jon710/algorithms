function bfs(root) {
  const queue = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);

    if (currentNode.right) queue.push(currentNode.right);
  }
}

module.exports = bfs;
