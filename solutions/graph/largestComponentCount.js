function explore(graph, current, visited) {
  if (visited.has(current.toString())) return 0;

  visited.add(current.toString());

  let size = 1;

  for (let neighbor of graph[current]) {
    size += explore(graph, neighbor, visited);
  }

  return size;
}

function largestComponentCount(graph) {
  const visited = new Set();
  let longest = 0;

  for (let node in graph) {
    const size = explore(graph, node, visited);
    longest = Math.max(longest, size);
  }

  return longest;
}

console.log(
  largestComponentCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
);
