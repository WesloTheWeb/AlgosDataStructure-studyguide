const vertices = ['A', 'B', 'C', 'D', 'E'];
const adjacencyMatrix = [
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0]
];

function getAdjacentVertices(vertex) {
  const index = vertices.indexOf(vertex);
  const row = adjacencyMatrix[index];
  const adjacentVertices = [];

  for (let i = 0; i < row.length; i++) {
    if (row[i] === 1) {
      adjacentVertices.push(vertices[i]);
    };
  };

  return adjacentVertices;
};

const adjacentVerticesOfA = getAdjacentVertices('A');
console.log(adjacentVerticesOfA); // Output: ['B', 'C']
console.log(getAdjacentVertices('B')); // Output: ['A', 'D']

/*
    A  B  C  D  E
A  [0, 1, 1, 0, 0],
B  [1, 0, 0, 1, 0],
C  [1, 0, 0, 0, 1],
D  [0, 1, 0, 0, 1],
E  [0, 0, 1, 1, 0]

*/

const myMap = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
console.log(myMap.size); // Output: 3