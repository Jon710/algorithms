const vertices = ["A", "B", "C", "D", "E"];

const vertexIds = new Map([
  ["A", 0],
  ["B", 1],
  ["C", 2],
  ["D", 3],
  ["E", 4],
]);

const adjacentMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const findAdjacencies = (node) => {
  const adjacentNodes = [];

  for (let i = 0; i < vertices.length; i++) {
    nodeVertex = vertexIds.get(node);
    if (adjacentMatrix[nodeVertex][i] === 1) {
      adjacentNodes.push(vertices[i]);
    }
  }

  return adjacentNodes;
};

console.log(findAdjacencies("C"));

const isConnected = (node1, node2) => {
  const nodeId1 = vertexIds.get(node1);
  const nodeId2 = vertexIds.get(node2);

  return !!adjacentMatrix[nodeId1][nodeId2];
};

console.log(isConnected("A", "B"));
