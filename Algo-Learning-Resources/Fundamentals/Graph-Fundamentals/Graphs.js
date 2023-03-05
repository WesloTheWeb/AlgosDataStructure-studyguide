/*
❓ PROMPT
Given an array of airport origin an destinations, find the following:
    1. Is there a possible route between Phoenix (PHX) and Bangkok (BKK)? BFS
    2. Find if there exist a specific route PHX and BKK DFS

Routes:
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
*/

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' '); // turns string into an array

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]

// the graph
const adjacencyList = new Map();

// Lets define a function to add a node and an edge
function addNode(airport) {
    // Creates key value, key being airport and value being an array:
    adjacencyList.set(airport, []);
};

function addEdge(origin, destination) {
    // entry for origin then push destination on its list.
    adjacencyList.get(origin).push(destination);
    // entry for destination, then push origin on its list.
    adjacencyList.get(destination).push(origin);
};

// Creating the Graph
airports.forEach(addNode); // acts on every element in the array

routes.forEach(route => addEdge(...route));
// loops over route. Takes two argument, use the rest syntax to destructure.

console.log(adjacencyList);

// Breadth First Search BFS
function breadthFirstSearch(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            if (destination === 'BKK') {
                console.log('found it!');
            };

            if (!visited.has(destination)) {
                // add to visited set
                visited.add(destination);
                // push to queue
                queue.push(destination);
                console.log(destination)
            };
        };
    };
};

/* Overview of BFS Traversal
1. We need a function that takes a starting node as its argument.
2. From this starting node we want to see if it's children is our target, BKK,
    if not visit their children and do the same thing.
3. Use a Queue FIFO. First item in is our starting node.
4. Create variable to de-que, removing the first element in our queue.
5. We'll need to grab our edges (destinations) to add to the queue. We want to 
create a Set for our visited nodes in an array to make it so we do not endlessly loop.

Good at finding all the possible routes
*/

breadthFirstSearch('PHX');

// Depth First Search (DFS) we want to find a single path.
// We want to find a route from PHX to BKK.

function depthFirstSearch(start, visited = new Set()) {
    console.log(start);
    let steps = 1;
    visited.add(start);

    const destinations = adjacencyList.get(start);

    // iterate over our graph
    for ( const destination of destinations) {
        steps += 1;
        if (destination === 'BKK') {
            console.log(`DFS found Bangkok in ${steps} steps`);
            return;
        };

        // If has not visited. call function to go deeper into call stack until stopping point
        if (!visited.has(destination)) {
            depthFirstSearch(destination, visited);
        };
    };
};

depthFirstSearch('PHX')

/* Overview
1. Starting off recursively
- Takes starting node as first argument, and set as second argument.
2. We set visited in our argument.
3. Iterate over graph. If has not been visited we call the function again until we find it.
*/