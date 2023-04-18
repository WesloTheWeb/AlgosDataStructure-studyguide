/*
'''
Given an adjacency list of a directed graph, return "BINARY TREE" if it's a binary tree, "TREE" if it's any other type of tree, or "NONE" if it's neither.
 

EXAMPLE(S)
     1
   /   \ 
 2     3
/
4

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
   \  /
     4

input:
classify(
    {
        1: [2, 3],
        2: [4],
        3: [4],
        4: [],
    }
) -> NONE
 


1. Single root - no incoming pointer (and has children)
2. Every node is connected

3. No closed loop

4. 2 childrens -> Binary tree

pseudocode:
Function #1
#Single root check function
- create a set out of all the nodes
- iterate through adj list of each node: 
    when we visit a node, remove it from the set

- check if length of remaining set is only 1
    - if not, we don't have a tree at all
    - if so, we can continue (we have single root), return root node
    - else, we return none, then it's falsy and we have no tree

Function #2
#second function - dfs
    #create a visited set
    #create flag for greater than two children set to binary tree
    #check if current node is in visited set:
      #if it is, set flag to "NONE"
      if not,
        mark it as visited
        iterate through its adjacency list 
            - if more than two children (if length of adj list > 2)
          -  set greater than two children flag to tree
        re-call DFS function passing in current node
    Return greater than two children flag


FUNCTION SIGNATURE
def classify(adj_list: dict) -> str:
'''
*/

function classify(adj_list) {
    const visited = new Set();
    const breakOut = false;
    let flag = 'BINARY TREE';
    
    const getRoots = (adj_list) => {
      const roots = new Set(Object.keys(adj_list));
      for(key of roots){
        for(value of key){
          roots.delete(value);
        }
      }
      
      return roots;
    }
  
    const roots = getRoots(adj_list);
    const root = null;
    
    if(roots.size > 1 || roots.size == 0){
      return "NONE";
    }elseif(roots.size === 1){
      root= roots.get(0);
    }
    
    dfs(root);
  
    const dfs = (node) => {
      // base case
      //breakOut
      if (breakOut) {
        return;
      }
      if (visited.has(node)) {
        flag = 'NONE';
        breakOut = true;
        return;
      } else {
        visited.push(node);
        const children = adj_list[node];
        //check size and set flag if greater than 2
        if (children.length > 2) {
          flag = 'TREE'
        }
      // recursive 
        children.forEach((c) => {
          dfs(c)
        })
      }
  
   
    }
  
    return flag;
  
  }