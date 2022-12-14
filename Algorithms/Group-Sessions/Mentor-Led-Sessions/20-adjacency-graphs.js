/*########################
TYPE: GRAPH
Question:
Given an adjacency list of a directed graph, return "BINARY TREE" 
if it's a binary tree, "TREE" if it's any other type of tree, or "NONE" if it's neither.
 
    1
  /   \
 2     3
  \
   4

Example:

// |--1--
// | 2   3
// 4  

# Example 1
input:
classify(
  {
    1: [2, 3],
    2: [4],
    3: [],
    4: []
  }
) -> BINARY TREE
--------------

      1        5
    /   \
   2     3
  /
 4

# Example 2
input:
classify(
  {
    1: [2, 3],
    2: [4],
    3: [],
    4: [],
    5: [],
  }
) -> NONE

--------------

    1
  /   \
 2     3
 \     /
 4

# Example 3
input:
classify(
  {
    1: [2, 3],
    2: [4],
    3: [4],
    4: [],
  }
) -> NONE


    5         4
  /   \      /
2       7


What makes a tree a tree:
1. No Cycles
2. There should be only one root.
  2a. Each node should only have one parent.
3. Each node should be connected.
4. Tree must be directed.

What make's a binary tree?
1. Each node has at most 2 children.

Adjency Graph:
{
  1: [2, 3],
    2: [4],
      3: [],
        4: [],
          5: [],
}

- Uses a hashmap for key and the array is for children values.

mutual friend: defined as a friend of a friend who is not a friend of you
o
  |
  x - r - i - w
  |
  t - p

HashMap < Character, Array >>
{
  'x': ['r', 't']
  'r': ['x', 'i', 'o']
  't': ['p']
}

Set < Character > visiterNodes;
Queue < Character > q;
q.add('X')
while (q.size() != 0))
{
  Character currentNode = q.remove();
  visiterNodes.add(currentNode)

  for (node: currentNode.friends())
  {
    if (node in visitedNode)
        //do nothing
      else
      q.add(node)
  }


}

mutualfriend(x): o, i, p

let input = {
  '1': ['2', '3'],
  '2': ['4'],
  '3': ['1'],
  '4': ['1'],
}

// |--1--
// | 2   3
// 4  

Approach:
 

Graph

  2 - - 2----4
  |     |
  3----- 2----------- 1

x: [r, t,]
r: [x, i, o]
t: [p]

Pseudo Code:


########################*/


function findRoot(adjList) {
    // need to find all nodes which arent found in the child adjacency list
    let nodes = Object.keys(adjList);
    // 1,2,3,4,5
    let nodeSet = new Set(nodes);
    for (let node of nodes) {
        let adjNodesList = adjList[node];
        for (let adjNode of adjNodesList) {
            nodeSet.delete(adjNode.toString());   /// removes 2,3,4
        };
    };
    return nodeSet;
};

// Test Cases:
let input = {
    '1': ['2', '3'],
    '2': ['4'],
    '3': ['1'],
    '4': ['1'],
}

let inputTwo = {
    '1': ['2', '3'],
    '2': ['4'],
    '3': ['1'],
    '4': ['1'],
}



console.log();
console.log();
console.log();