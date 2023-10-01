// ? Utility Functions
/*
function tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
};

function ListNode(x) {
  this.value = x;
  this.next = null;
};

*/

/*
ARRAY
Question 1:
Given an array o fintegers sorted in ascending order, convert it to a height balanced BST.

- A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
- You must pick the smaller number when picking the "middle." In other words, when there are two numbers to choose from to pick
the next child node, choose the smaller value (see example below).

Examples
1.) Given an array: [-10, -3, 0, 5, 9]

returns

     0
    / \
 -10  5
   \    \
   -3    9
*/

function heightBalancedBST(array) {

};
/*
1. Choose 0 as a root node.
2. For left child node of 0, you have -10 and -3
3. Similar for choosing the right child of node 0.
*/

/*
ARRAY
Question 2:
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order 
starting from the top left eleement.
 
? Note: This is a key fundamental problem of matrix traversal.

Examples
1.)  [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

will return: [1, 2, 3, 6, 9, 8, 7, 4, 5]

2.) [
  [1, 2, 3],
  [4, 5, 6]
]

will return: [1, 2, 3, 6, 5, 4]

*/

function spiralMatrix(matrix) {

};

/*
BINARY TREE
Question 2:
Given a binary tree, return the in-order traversal of its nodes' values. You must use iterative approach.

In-order traversal:
1. Traverse the left subtree.
2. Visit the root.
3. Traverse the right subtree.

Examples
1.) Given a binary tree:
    1
   / \
  2   3

will return: [2, 1, 3]

*/

function inOrderTraversal(root) {

};


function solutionInOrderTraversal(root) {
  const stack = [];
  const output = [];
  let pointer = root;

  while (stack.length || pointer) {
    while (pointer) {
      stack.push(pointer);
      pointer = pointer.left;
    };

    let lastTree = stack.pop();
    output.push(lastTree.value);
    pointer = lastTree.right;
  };

  return output;
};