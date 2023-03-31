// Passes 4 / 7 tests
/* 
= we have edge list given to us. in tuples of (friend1, friend2).
- Unique names only
    - with All users of this social network exist in at least one tuple of this edge list. All users have a unique name.
- From the diagram we want to basically make sure everything is connected and there are no islands.

APPROACH
- Iterate through the edgelist in bidirectional matter,
    - we want to make sure there is A CONNECTION TO AT LEAST EACH PERSON aka No islands.
-  if all checks out we can return true early, else return false.
- edge list given is in the format of  (friend1, friend2)

Pseudo-code:
- Take our edge list and turn it into an adjacency list 
    i.e a: [b, c], b: [a], c: [a, d] etc..
- Since all users have unique name, we can have a visited to prevent overflowing, but because unique name might not matter but good check.
- dfs approach when going through the list and checking

*/

/* 
= we have edge list given to us. in tuples of (friend1, friend2).
- Unique names only
    - with All users of this social network exist in at least one tuple of this edge list. All users have a unique name.
- From the diagram we want to basically make sure everything is connected and there are no islands.

APPROACH
- Iterate through the edgelist in bidirectional matter,
    - we want to make sure there is A CONNECTION TO AT LEAST EACH PERSON aka No islands.
-  if all checks out we can return true early, else return false.
- edge list given is in the format of  (friend1, friend2)

Pseudo-code:
- Take our edge list and turn it into an adjacency list 
    i.e a: [b, c], b: [a], c: [a, d] etc..
- Since all users have unique name, we can have a visited to prevent overflowing, but because unique name might not matter but good check.
- dfs approach when going through the list and checking

*/

function solution(edge_list) {
    // make the adjacency list
    const list = adjacencyList(edge_list);
    
    // progressing of iteration
    const visited = new Set();
    
    // dfs iterate through the list, and add check
    const dfs = (startPoint) => {
        visited.add(startPoint);
        for (let friend of list.get(startPoint)) {
            // check
            if (!visited.has(friend)) {
                dfs(friend);
            };
        };
    };

    return false;
};

const adjacencyList = (edgeList) => {
    const adjList = new Map();
    
    for (let [friend1, friend2] of edgeList)  {
        // friend 1 adding friend 2
        if (adjList.has(friend1)) {
            adjList.get(friend1).push(friend2)
        } else {
            adjList.set(friend1, [friend2]);
        };
        
        // inverse
        if (adjList.has(friend2)) {
            adjList.get(friend2).push(friend1)
        } else {
            adjList.set(friend2, [friend1]);
        };    
    };
    
    return adjList;
};
