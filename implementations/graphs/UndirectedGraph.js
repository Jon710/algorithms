// adj list
class UndirectedGraph {
  constructor() {
    this.nodes = 0;
    this.adjacencyList = new Map();
  }

  addVertex(node) {
    this.adjacencyList.set(node, []);
    this.nodes++;
  }

  addEdge(origin, destination) {
    this.adjacencyList.get(origin).push(destination);
    this.adjacencyList.get(destination).push(origin);
  }

  showConnections() {
    const nodes = this.adjacencyList.keys();

    for (let node of nodes) {
      let nodeConnections = this.adjacencyList.get(node);
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "->" + connections);
    }
  }

  bfs(origin) {
    const queue = [origin];
    const visited = new Set([origin]);
    const result = [];

    while (queue.length) {
      const current = queue.shift();
      result.push(current);

      for (const neighbor of this.adjacencyList.get(current)) {
        if (visited.has(neighbor)) continue;
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }

    return result;
  }

  recursiveDFS(origin) {
    const result = [];
    const visited = new Set();
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited.add(vertex);
      result.push(vertex);

      adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) return dfs(neighbor);
      });
    }

    dfs(origin);

    return result;
  }
}

const graph = new UndirectedGraph();

graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addEdge("3", "1");
graph.addEdge("3", "4");
graph.addEdge("4", "2");
graph.addEdge("4", "5");
graph.addEdge("1", "2");
graph.addEdge("1", "0");
graph.addEdge("0", "2");
graph.addEdge("6", "5");

graph.showConnections();

// console.log(graph.bfs("1"));
console.log(graph.recursiveDFS("1"));
