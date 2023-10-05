function explore(graph, current, visited) {
  if (visited.has(current.toString())) return false;

  visited.add(current.toString());

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
}

function connectedComponentCount(graph) {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++;
    }
  }

  return count;
}

console.log(
  connectedComponentCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
);
