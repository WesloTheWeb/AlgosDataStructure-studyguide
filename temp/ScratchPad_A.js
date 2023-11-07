// CORRECT SOLUTION:
// TODO: Write down question and clean up pads

/* We want to know if this social network is connected or not aka, there is no islands or disconnected nodes
tuple is (friend1, friend2)
Return boolean whether or not everything is connected.

EXAMPLE 1:
User1--User2
 |     |
User3--User4---User5
 |_______________|
True, everything is connected

EXAMPLE 2:
User1--User2
 |            
User3  User4---User5
False, not everything is connected. User4 -- User5 is separated from User1--User2--User3

ASSUMPTIONS:
- We know all users have unique name, no need for visited set (but would help and is a good check)
- If there is disconnection of any sort like Example 2, we will return false. Everything needs to be connected.
- (Null case) return false nothing there
- Only one connection i.e User1, return false

OPTIONS / APPROACHES:
- Either BFS or DFS would work, we just need to traverse the nodes.
    OPTION 1: BFS
        - Queue
        - Check if each node has a connection to other via adjacencyList 
    OPTION 2: DFS
        - Stack (can run recursively)
        - check if each node has a connection to other via AdjacencyList, DFS recursive takes care as it backtracks til hits null   
        or a corner
        
PSEUDO CODE:
- From our edgeList we need to create adjacencyList. Create function to make the adjacencyList
- Once created, plug in the 'edge_list' into the helper function to create the graph
- Traverse the graph (DFS)
    - Check: If a at least one node has no connection we can early return false
    (Optional but good check): visited set
- default return true;

*/

function solution(edge_list) {
    const graph = createAdjacencyList(edge_list);
    const visited = new Set();
    
    const dfs = (node) => {
      visited.add(node);
      for (let neighbor of graph.get(node)) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };
  
    dfs(edge_list[0][0]);
    return visited.size === graph.size;
  }
  
  const createAdjacencyList = (edges) => {
    const graph = new Map();
    
    for (let [u, v] of edges) {
      if (!graph.has(u)) {
        graph.set(u, []);
      }
      if (!graph.has(v)) {
        graph.set(v, []);
      }
      // undirected graph, so we add edges in both directions
      graph.get(u).push(v);
      graph.get(v).push(u);
    }
    
    return graph;
  };
  
  
  // Test Samples
  // const sampleTest = [['user1', 'user2'], ['user1', 'user3'],['user2','user4'],['user4','user5'], ['user5','user3']]
  
  // // TEST:
  // console.log(createAdjacencyList(sampleTest));


  /* ORIGINAL CODE WHILE WORKING ON:

Suppose you are given an edge list of all the members of a social network. This edge list contains tuples of the format.

(friend1, friend2)

All users of this social network exist in at least one tuple of this edge list. All users have a unique name.

Return a boolean of whether this social network is connected or not.

function solution(edge_list) {
    createAdjacencyList(edge_list);
    const visited = new Set();
    
    // recursive call
    const dfs = (edgeList) => {
        // base case
        
        // recursive case
    };

    dfs(edge_list);
    return false;
}

const createAdjacencyList = (edges) => {
  const graph = new Map();
  
  for (let i = 0; i < edges.length; i++) {
      const [u, v] = edges[i];
    // unidrectional graph we are dealing with:
    graph.get(u).push(v);
    graph.get(v).push(u);
  }
  
  return graph;
};
 


  */
