/* Algo Marathon
Date: January 11th, 2023
PARTNERS:

QUESTION:
Just like putting up an artificial holiday tree, in this problem, we'll build a tree from a box of parts.
In our case, the box of parts will be a list of lists (nested arrays) that represent the edges between nodes.

* The index into the outer array identifies a node of the tree
* The inner array lists the nodes that are children of the current one
* The value at each node should be it's index in the original array
* For starters, you may assume that the tree will be a binary tree, the first index in the list is the left child,
the second is the right.
* A null or None indicates a missing child

For example:

[
  0: [1, 2],
  1: [null, null], // or [None, None] for Python folks
  2: [] // assume null if missing
]

This describes a tree that is shaped like this:

   0
 /  \
1    2

As a follow up, extend this code to support N-ary trees, that is, a tree that allows an arbitrary
number of children. How does this change the time complexity?

EXAMPLE(S)
     0
   /   \
  1     2
 /
3

input:
buildTree(
    [
        [1, 2],
        [3],
        [],
        []
    ]
) -> returns a pointer to the node with the value 0.

-------------------------

     2
   /   \
  0     3
 /
1

input:
buildTree(
    [
        [2],
        [],
        [0, 3],
        []
    ]
) -> returns a pointer to the node with the value 2.



FUNCTION SIGNATURE
def buildTree(adj_lists) -> Node:

APPROACH:




PSEUDO CODE:




Time Complexity:
Space Complexity:
#########################################*/

// Our attempt:




// Test Cases:



// Solution:



// Solution Test Cases: