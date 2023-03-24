/*
QUESTION:
Suppose you are given an edge list of a DAG. This edge list contains int. tuples of the format.

(node1, node2)

Every node has a unique int associated with it. node1 is a parent node and node2 is a child node.

Return a list of the nodes N levels above a sink in ascending order.

Example
     1 
    / \
   2  3    6
    \/ \    \
    4   5    7

solution(edge_list, 1) -> [2, 3, 6]
Explanation: The sinks are 4, 5, and 7. The nodes 1 level above are 2, 3, and 6

solution(edge_list, 2) -> [1]
Explanation: The sinks are 4, 5, and 7. Nodes 4 and 5 both have Node 1 two levels above. 
Node 7 has zero nodes two levels above

solution(edge_list, 3) -> []
Explanation: There are no nodes 3 levels above the sinks
*/




// possible solution [learning purposes]:
function solution(edge_list, N) {
    const graph = new Map();
    const sinks = new Set();
    for (const [parent, child] of edge_list) {
      if (!graph.has(parent)) {
        graph.set(parent, []);
      }
      graph.get(parent).push(child);
      sinks.delete(child);
      if (!graph.has(child)) {
        graph.set(child, []);
        sinks.add(child);
      }
    }
    const result = new Set();
    function dfs(node, level) {
      if (level === N) {
        result.add(node);
      } else {
        for (const child of graph.get(node)) {
          dfs(child, level + 1);
        }
      }
    }
    for (const sink of sinks) {
      dfs(sink, 0);
    }
    return Array.from(result).sort((a, b) => a - b);
  }

/*
To solve this problem, we can start by building a directed graph from the given edge list using a hash map where 
each key is a node and its value is an array of its child nodes. Once we have the graph,
we can perform a depth-first search (DFS) starting from each sink node to identify the nodes N levels above it. 
 
We can keep track of the level of each node during the DFS and add it to the result list if its level is N.

First, we create a Map object to represent the graph and a Set object to store the sink nodes. We loop through the 
edge list and add each edge to the graph, updating the sink set accordingly. We also initialize an empty Set object to 
store the result.

Next, we define a recursive dfs function that takes a node and its level as input. If the level is equal to N, 
we add the node to the result set. Otherwise, we recursively call the dfs function on each child node with the level 
incremented by 1.

Finally, we loop through each sink node and call the dfs function with a level of 0. We convert the result set to an array 
and sort it in ascending order before returning it.

This solution has a time complexity of O(|V| + |E|), where |V| is the number of nodes and |E| is the number of edges 
in the graph. This is because we need to loop through the edge list to build the graph and then perform a DFS starting 
from each sink node, visiting each node and edge exactly once.

*/