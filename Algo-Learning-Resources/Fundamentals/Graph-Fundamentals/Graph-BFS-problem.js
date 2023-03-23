/*
❓ PROMPT
Given a vertex and edge list of nodes and a start node for an undirected graph return the sum of all the nodes IDs accessible from the start node. 
For practice's sake, do this in BFS order.

Example(s)
vertexList: [1, 2, 3, 4, 5]
edgeList: [(1, 2), (2, 3), (1, 3)]

1--2
| /
3      4    5

sumNodes(vertexList, edgeList, 1) -> 6

Node 1 has access to 2 and 3. The sum of all these nodes is 6. Nodes 4 and 5 aren't accessible.
 
🔎 EXPLORE
List your assumptions & discoveries:
 - Doing this BFS
 - We will not have access to all avilable vertices depends on the edges

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sumNodes(vertexList, edgeList, startNode) {
def sumNodes(vertexList: list, edgeList: list, startNode: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

*/

// My ATTEMPT:
function sumNodes(vertexList, edgeList, startNode) {
    // Create our graph
    const graph = createGraph(edgeList);
    const queue = [startNode];
    let runningSum = -Infinity;

    while (queue.length > 0) {
        const curr = queue.shift(); // gives index number

        // iterate over our graph
        for (let neighbor of graph[curr])
            runningSum = Math.max(runningSum, neighbor)
    };

    return runningSum;
};

const createGraph = edges => {
    const graph = new Map();

    for (let edge of edges) {
        let node1 = edge[0];
        let node2 = edge[1];
        // because this is going over each subarray [0] and [1] will correlate
        // respectively

        // Creating our A: [...]
        if (graph.has(node1)) {
            graph.get(node1).push(node2);
        } else {
            graph.set(node1, [node2]);
        }
        // Also unidirectional so got to do inverse
    }

    return graph;
};

/*##############
SOLUTION
################
*/
function toAdjacencyList(vertexList, edgeList) {
    if (vertexList.length === 0) return {};

    const adjacencyList = {};

    // Step 1: map each vertex to a key and assign an empty array as the value
    for (const vertex of vertexList) {
        adjacencyList[vertex] = [];
    }

    // Step 2: map all edges from edgeList to corresponding vertex in adjacencyList 
    for (const [v1, v2] of edgeList) {
        adjacencyList[v1].push(v2);
        adjacencyList[v2].push(v1);
    }

    return adjacencyList;
}

// ********************* //
// *** Main Function *** //
// ********************* //
function sumNodes(vertexList, edgeList, startNode) {
    const adjacencyList = toAdjacencyList(vertexList, edgeList);

    if (vertexList.indexOf(startNode) === -1) return 0;

    // Create our visited set to exit out of cycles and our sum.
    const visited = new Set();
    let sum = 0;

    // Initialize the queue
    const queue = [startNode];

    // While loop
    while (queue.length) {
        const current = queue.shift();

        if (visited.has(current)) continue;

        visited.add(current);
        sum += current;

    // Our For Loop of neighbors
        const neighbors = adjacencyList[current]; // key into the array of value
    
        for (const neighbor of neighbors) {
            queue.push(neighbor);
        };
    };

    return sum;
};