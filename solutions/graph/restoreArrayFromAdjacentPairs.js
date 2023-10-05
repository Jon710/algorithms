/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  const result = [];
  const graph = new Map();

  // build graph
  for (const edge of adjacentPairs) {
    let list = graph.get(edge[0]) || [];
    list.push(edge[1]);
    graph.set(edge[0], list);
    list = graph.get(edge[1]) || [];
    list.push(edge[0]);
    graph.set(edge[1], list);
  }

  // dfs on graph
  const stack = [];
  const visited = new Set();

  // get source node
  for (const [key, value] of graph) {
    if (value.length === 1) {
      stack.push(key);
      break;
    }
  }

  let i = 0;
  while (stack.length) {
    const current = stack.pop();
    result[i++] = current;
    visited.add(current);
    for (let neighbor of graph.get(current)) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }

  return result;
};
