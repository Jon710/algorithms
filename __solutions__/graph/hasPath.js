// acyclic
const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// recursive dfs using call stack
function hasPath(graph, source, destination) {
  if (source === destination) return true;

  for (let neighbor of graph[source]) {
    if (hasPath(graph, neighbor, destination)) return true;
  }

  return false;
}

// iterative bfs with queue
function iterativeHasPath(graph, source, destination) {
  const queue = [source];

  while (queue.length) {
    const current = queue.shift();

    if (current === destination) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
}

// console.log(hasPath(graph, "f", "k"));
console.log(iterativeHasPath(graph, "f", "k"));
