/*

Graphs:

A graph is a group of nodes (at a high level).

Common ways to traverse a graph:

BFS
- If the solution isn't far from the root
- If we want to gradually expand our search
- If there's a dense number of neighbors and connections

DFS
- If the solution is far from the root
- If there's a sparse number of neighbors
- If we want to go deep down a path

Common representations of graphs:

- vertex and edge lists
- adjacency lists
- adjacency matrix
- class reprensentation of a node and a graph

                    A
                /   |   \
              B  -- C     D
      E       

vertex/edge list:

const vertices = [A, B, C, D, E]
const edges = [
  [A, B],
  [B, C],
  [A, C],
  [A, D]
]

adjacency list:

{
  A: [B, C, D],
  B: C
}

[  A. B. C. D  E
  [0, 1, 1, 1, 0], A
  [1, 0, 1, 0, 0], B
  [1, 1, 0, 0, 0], C
  [1, 0, 0, 0, 0], D
  [0, 0, 0, 0, 0], E
]

*/

class Node {
    constructor(val, neighbors = []) {
      this.val = val;
      this.neighbors = neighbors;
    }
  }
  
  class Graph {
    constructor(nodes = []) {
      this.nodes = nodes;
    }
  }
  
  const graph = {
    'A' : ['B','C'],
    'B' : ['D', 'E'],
    'C' : ['F'],
    'D' : [],
    'E' : ['F'],
    'F' : []
  };
  
  function bfs(adjacencyList){
    let visited = new Set();
  
    function bfsHelper(node){
      let queue = [node]
  
      while(queue.length > 0){
        let current = queue.shift();
        console.log(current)
        for(let neighbor of adjacencyList[current]){
          if(!visited.has(neighbor)){
            queue.push(neighbor)
            visited.add(neighbor)
          }
        }
      }
    }
  
    for(let key in adjacencyList){
      if(!visited.has(key)){
        bfsHelper(key)
        visited.add(key)
      }
    }
  }
  
  // bfs(graph)
  
  function dfs(adjacencyList) {
    let visited = new Set();
  
    function dfsHelper(node) {
      if (visited.has(node)) return;
      visited.add(node)
      for(let neighbor of adjacencyList[node]){
        dfsHelper(neighbor)
      }
      console.log(node)
    }
  
    for(let key in adjacencyList){
      dfsHelper(key)
    }
  }
  
  // dfs(graph)
  
  /*
  
  Example 1:
  
  Input: rooms = [[1],[2],[3],[]]
  Output: true
  Explanation: 
  We visit room 0 and pick up key 1.
  We then visit room 1 and pick up key 2.
  We then visit room 2 and pick up key 3.
  We then visit room 3.
  Since we were able to visit every room, we return true.
  
  Example 2:
  
  Input: rooms = [[1,3],[3,0,1],[2],[0]]
  Output: false
  Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
  
  def solution(self, rooms: List[List[int]]) -> bool:
          q = deque()
          q.append(rooms[0])
          visited = set()
          visited.add(0)
          while q:
              keys = q.popleft()
              for k in keys:
                  if k not in visited:
                      q.append(rooms[k])
                      visited.add(k)
          return len(visited) == len(rooms)
  
  policy: {
    id: string
    resources: []
    users: []
    subPolicies: []
  }
  
  If a user exists on the same policy as a resource, that user has access to that policy.
  In addition, any user in a given policy has access to all resources in all subPolicies recursively.
  
  Implement a function called hasAccess
  
  const hasAccess = (userId, resourceId, policies) => {
  
  }
  
  Given a list of airplane travel tickets, find the longest flight path that one can take.
  
  [
    ['SFO', 'LGA'],
    ['LGA', 'ATX'],
    ['ATX', 'PDX'],
    ['SFO', 'SAN'],
    ['FLL', 'PDX']
  ]
  
  {
    SFO: ['LGA', 'SAN'],
    LGA: [ATX],
    ..
  }
  
  */