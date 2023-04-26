// https://adrianmejia.com/how-to-solve-any-graph-2d-arrays-maze-interview-questions-in-javascript-dfs-vs-bfs/
function bfs(target) {
  const queue = [[0, 0]]; // 1. Initialize queue with Node and current distance 0
  const seen = new Set(0); // 2. Initialize set

  for (const [current, distance] of queue) {
    // 3. Loop until the queue is empty
    if (current === target) return distance; // 4. Check dequeued is solution
    for (const [neighbor, currDist] of getNeighbors(node)) {
      // 5. Get next possible moves (neighbor nodes)
      if (seen.has(neighbor)) continue; // 6. Skip seen nodes
      seen.add(neighbor); // 7. Mark next node as seen.
      queue.push([neighbor, currDist + 1]); // 8. Add neighbor to queue and increase the distance.
    }
  }

  return -1;
}

function getNeighbors(node) {
  // TODO: implement based on the problem.
}

// algo monster template
function bfs(root) {
  let queue = [root];
  let visited = new Set([root]);
  while (queue.length) {
    const node = queue.shift();
    for (const neighbor of get_neighbors(node)) {
      if (visited.has(neighbor)) continue;
      queue.push(neighbor);
      visited.add(neighbor);
    }
  }
}
