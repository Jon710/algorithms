const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["d", "E"],
];

const findAdjacentNodes = (node) => {
  const adjacentNodes = [];

  for (let edge of edges) {
    const nodeIdx = edge.indexOf(node);
    if (nodeIdx > -1) {
      const adjacentNode = nodeIdx === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
};

console.log(findAdjacentNodes("C"));

const isConnected = (node1, node2) => {
  return edges.some((edge) => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
  });
};

console.log(isConnected("A", "D"));
