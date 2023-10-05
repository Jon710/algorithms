const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// convert edges list to a graph
function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

function hasPath(graph, src, dst, visited) {
  if (src === dst) return true;

  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }

  return false;
}

function undirectedPath(edges, node1, node2) {
  const graph = buildGraph(edges);
  return hasPath(graph, node1, node2, new Set());
  // console.log(graph);
}

console.log(undirectedPath(edges, "j", "m"));
