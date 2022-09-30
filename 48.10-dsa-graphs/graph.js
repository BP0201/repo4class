class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    if (!this.nodes.has(vertex)) this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let neighbor of vertex.adjacent) {
      vertex.adjacent.delete(neighbor);
      neighbor.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    while (toVisitStack.length) {
      let curr = toVisitStack.pop();
      for (let neighbor of curr.adjacent) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          toVisitStack.push(neighbor);
        }
      }
    }
    const arr = [];
    for (let node of seen) {
      arr.push(node.value)
    }
    return arr;

    /** Not sure what is wrong with my code, solution is below and passes the test but mine does not. I use the same method I was taught in videos. */

    // // Create an empty stack
    // const stack = [start];
    // const result = [];
    // const visited = new Set();
    // let currentVertex;

    // // visit node
    // visited.add(start);

    // // while there are still neighbors to visit
    // while (stack.length) {
    //   currentVertex = stack.pop();
    //   result.push(currentVertex.value);

    //   // visit neighbors and push onto stack
    //   currentVertex.adjacent.forEach(neighbor => {
    //     if (!visited.has(neighbor)) {
    //       visited.add(neighbor);
    //       stack.push(neighbor);
    //     }
    //   });
    // }
    // return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    while (toVisitQueue.length) {
      let curr = toVisitQueue.shift();
      for (let neighbor of curr.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    const arr = [];
    for (let node of seen) {
      arr.push(node.value)
    }
    return arr;
  }
}



// const node1 = new Node ("Node 1");
// const node2 = new Node ("Node 2");
// const graph = new Graph();

// graph.addVertices([node1, node2])
// graph.addEdge(node1, node2)
// console.log(graph.depthFirstSearch(node1))
// let graph = new Graph();
//     let S = new Node("S");
//     let P = new Node("P");
//     let U = new Node("U");
//     let X = new Node("X");
//     let Q = new Node("Q");
//     let Y = new Node("Y");
//     let V = new Node("V");
//     let R = new Node("R");
//     let W = new Node("W");
//     let T = new Node("T");

//     graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

//     graph.addEdge(S, P);
//     graph.addEdge(S, U);

//     graph.addEdge(P, X);
//     graph.addEdge(U, X);

//     graph.addEdge(P, Q);
//     graph.addEdge(U, V);

//     graph.addEdge(X, Q);
//     graph.addEdge(X, Y);
//     graph.addEdge(X, V);

//     graph.addEdge(Q, R);
//     graph.addEdge(Y, R);

//     graph.addEdge(Y, W);
//     graph.addEdge(V, W);

//     graph.addEdge(R, T);
//     graph.addEdge(W, T);

// console.log(graph.depthFirstSearch(S))


module.exports = {Graph, Node}