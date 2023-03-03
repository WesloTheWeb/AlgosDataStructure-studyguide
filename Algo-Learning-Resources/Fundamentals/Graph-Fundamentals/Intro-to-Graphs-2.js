// Javascript Scratchpad
function toAdjList(vertexList, edgeList) {
    const output = {};
    for (let i = 0; i < vertexList.length; i++) {
        output[vertexList[i]] = [];
    }
    for (let i = 0; i < edgeList.length; i++) {
        const [frm, to] = edgeList[i];
        output[frm].push(to);
    }
    return output;
}

function dfs(adjacencyList) {
    const visited = new Set();

    function dfsHelper(currNode) {
        visited.add(currNode);
        console.log(currNode);
        const neighbors = adjacencyList[currNode];
        // Base Case: No more neighbors
        if (neighbors === undefined || neighbors.length === 0) {
            console.log("DONE");
            return;
        }
        // Recursive Case: iterate over neighbors and recurse
        for (let i = 0; i < neighbors.length; i++) {
            const neighborNode = neighbors[i];
            if (visited.has(neighborNode)) {
                continue;
            }
            dfsHelper(neighborNode);
        }
    }

    for (const node of Object.keys(adjacencyList)) {
        if (!visited.has(node)) {
            dfsHelper(node);
        }
    }
    console.log("Visited set after DFS: " + Array.from(visited));
}

const vertices = ["A", "B", "C", "D", "E"];
const edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "C"],
    ["B", "D"],
    ["C", "D"],
    ["D", "E"],
];

console.log(toAdjList(vertices, edges));
dfs(toAdjList(vertices, edges));

const vertexList = [
    "Prepare kitchen",
    "Mix flour",
    "Mix wet ingredients",
    "Combine",
    "Put in oven",
    "Clean kitchen",
];
const edgeList = [
    ["Prepare kitchen", "Mix wet ingredients"],
    ["Prepare kitchen", "Mix flour"],
    ["Mix flour", "Combine"],
    ["Mix wet ingredients", "Combine"],
    ["Combine", "Put in oven"],
    ["Combine", "Clean kitchen"],
];
/*
Prepare Kitchen, Mix Wet Ingredients, Mix Flour, Combine, Clean Kitchen, Put In oven
check if node is a source -> we have to start search at a source
node is a source if:
start with a source to do DFS
*/
function getSources(adjList) {
    const possibleSources = new Set(Object.keys(adjList));
    for (const neighbors of Object.values(adjList)) {
        // if a node has an in-edge, then it can't
        // be a source
        for (const node of neighbors) {
            if (possibleSources.has(node)) {
                possibleSources.delete(node);
            }
        }
    }
    return possibleSources;
}

console.log(getSources(toAdjList(vertices, edges)));

function bruteForce(adjList) {
    const sources = getSources(adjList);
    const output = [];
    while (sources.size > 0) {
        output.push(...sources);
        for (const s of sources) {
            delete adjList[s];
        }
        sources.clear();
        sources.add(...getSources(adjList));
    }
    return output;
}

console.log(bruteForce(toAdjList(vertexList, edgeList)));

function topoSort(adjacencyList) {
    const stack = [];
    const visited = new Set();

    function dfs(currNode) {
        visited.add(currNode);
    }
}