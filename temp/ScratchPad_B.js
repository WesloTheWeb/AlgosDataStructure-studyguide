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
    }
  }

  return adjacentVertices;
}

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

// Find the most frequent number in this array
const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 10, 11, 12]

const countFrequencies = (arr) => {
  const frequencies = new Map();
  let mostFrequentNumber = 0;

  for (let num of arr) {
    if (!frequencies.has(num)) {
      frequencies.set(num, 1);
    } else {
      frequencies.set(num, frequencies.get(num) + 1);
    };
  };

  // once added to the map... iterate
  for (let [num, value] of frequencies) {
    if (value > mostFrequentNumber) {
      mostFrequentNumber = num;
    };
  };

  return mostFrequentNumber;
};


// TEST CASES
const test1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 10, 11, 12]
const test2 = [1, 2, 2, 3]; // 2
const test3 = [] // 0
const test4 = [1, 2, 3, 4]
const test5 = [1,1, 2, 2, 3]

console.log(countFrequencies(test1)) // 9
console.log(countFrequencies(test2)) // 2
console.log(countFrequencies(test3)) // 0
console.log(countFrequencies(test4)) // 1
console.log(countFrequencies(test5)) // 2

// Time: O(n); loop over array once
// Space: O(n) n number of the array