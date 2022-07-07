/* Office Hour - Algo Marathon
Date: July 6th, 2022
TOPIC: Trees
Contains:
- Height of tree
- Least occurring
#########################################*/


/*

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.


Design an algorithm that runs in less than O(n) time complexity.

        1 
     /      \
   2         3
 /  \       /
4   5      6

Input: [1,2,3,4,5,6]
Output: 6

Input: [1]
Output: 1

Algorithm:
Keep progressing down left subtree until we hit null

Is it possible for a node to have a right child but no left child
yes 
no  XXxxXx

Is it possible for a node to have a left child but no right child
yes xxxxxXx
no 
 

Not Complete Binary Tree
 
        1 <- x
     /      \
   2         3 <-
/   \        / \
x    x     
x
height(2) = 10

Complete Binary Tree

        1 
     /    \
   2        3
 /  \      /
4   5    6
 

Perfect Binary Tree
        1 
     /     \
   2        3 
 /  \       / \ 
4   5      6   7 


BFS: 1 2 3 4 5 6 7
BFS: 1 3 2 7 6 5 4
DFS: 1 2 4 5 3 6 7
DFS: 1 3 7 6 2 5 4
DFS: 1 3 6 7 2 5 4
DFS: 1 3 6 7 2 4 5
DFS: 1 3 2

*/
/*
   3
  /  \
1     2

  height: 2

       1 <-
    2    3
  4 5    6 7
8 9
  

    height(1)
      return 3 + 1
O(n) x
O(logn) xxxxxxx 
O(1) 
Q: Why is it O(logn)?
A: Cut the search space by half (or a fraction) every time, then it is a O(logn) run time 


You have a binary tree (NOT complete or full or perfect). Algorithm is keeping going to your left until null, count number of nodes.
O(n) xxxx <-
O(logn) xxxx
O(1) 

Q: Why is it O(n)?
A: In a CBT or PBT you are guaranteed balanced to a certain extent, while a non-CBT/PBT can be unbalanced


        5
      4
    3
  2
1


*/

function heightOfCompleteTree(node) { //1
  if (!node) {
    return 0
  }

  if (node.left) {
    return heightOfCompleteTree(node.left) + 1; // count the node you're currently at
  }
  return 1
}

/*
Given a binary tree with node values represented as integers, find and return the least occurring  tree node value.
Input:
       1
    2    2
  3 3    3 3

{1: 1, 2: 2, 3: 4}
               ^
min: 1
Output: 1
Input:
    1
 1 2  2
Output: return any valid answer at random (1 or 2)

Algorithm:
Have a map of count of values. Iterate through every node in the tree, adding its count to the map. Iterate through your map again, and find the minimum value.

Should we use DFS or BFS to solve this problem?
1. DFS x
2. BFS
3. Does not matter xxxxxx

[1, 1, 1, 1, 1] => 5
Should we traverse L -> R? or R -> L?

[1, 2, 2, 1, 2]

*/

function leastOccurring(node) {
  let nodes = [node]
  let counts = {}

  while (nodes.length > 0) {
    let currNode = nodes.pop()
    counts[currNode.value] = (counts[currNode.value] || 0) + 1
  }
  let minKey = null
  
  for (let key in counts) {
    if (!minKey) {
      minKey = key
    }
    if (counts[key] < counts[minKey]) {
      minKey = key
    }
  }
  return minKey
}