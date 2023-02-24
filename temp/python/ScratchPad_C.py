# Python Scratchpad
# Python Scratchpad

O(V+E)
class Node:
    id
    neighbors = [node1, node2, node3...]

# Adjacency matrix, O(V^2) space
 [[. . 0 .],
  [. . . .].
  [1 . 1 .].
  [. . . .]]

# Adjacency list
 [[neigh1, neight2.. ],
  [],
  [1, 3],
  []]

list of edges
[(i,j) ... ]

""""
Compare BFS and DFS, which would you use:
* Shortest drive to the grocery store
* Suggesting new friends using friend-of-friends
* Crawling the web
* Solving a simple maze
* Find college course pre-requisites

So what's the takeaway?

    BFS
        If the solution isn't far from the root
        If we want to gradually expand our search
        If there's a dense number of neighbors and connections
    DFS
        If the solution is far from the root
        If there's a sparse number of neighbors
        If we want to go deep down a path
"""

graph = {
  'A' : ['B','C'],
  'B' : ['D', 'E'],
  'C' : ['F'],
  'D' : [],
  'E' : ['F'],
  'F' : []
}

def outerDfs(graph):
    visited = set() # Set to keep track of visited nodes.

    def dfs(node):
        if node not in visited:
            visited.add(node)
            print(node)
            for neighbor in graph[node]:
                dfs(neighbor)
            
    dfs('A')

visited = set() # Set to keep track of visited nodes.
queue = []     #Initialize a queue

  visited.append(node)
  queue.append(node)

  while queue:
    s = queue.pop(0) 
    print (s, end = " ") 

    for neighbor in graph[s]:
      if neighbor not in visited:
        visited.append(neighbor)
        queue.append(neighbor)

"""
https://leetcode.com/problems/keys-and-rooms/

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
"""

