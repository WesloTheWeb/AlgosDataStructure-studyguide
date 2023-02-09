// TODO: Graph session to fix tutorial

const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

const visited = new Set();

function dfs(visited, graph, node) {
    if (!visited.has(node)) {
        console.log(node, " ");
        visited.add(node);
        for (const neighbor of graph[node]) {
            dfs(visited, graph, neighbor);
        };
    };
};

dfs(visited, graph, 'A');

console.log("-------");

const visitedBFS = new Set();
const queue = [];

function bfs(visited, graph, node) {
    visited.add(node);
    queue.push(node);

    while (queue.length > 0) {
        console.log(queue);
        const s = queue.shift();
        console.log(s, " ");

        for (const neighbor of graph[s]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            };
        };
    };
};

bfs(visitedBFS, graph, 'A');

//    A
// BaseException