/* Office Hour - Algo Marathon
Date: July 14th
TOPIC: Pathing in Binary Trees
Contains:
- get all subsequences
- Binary Tree Path

The theme of these two problems is recursion and a path. Pay attention to the patterns.
#########################################*/

/*############################
QUESTION: 1: Get all Subsequences
abc
subsequences: a, b, c, ab, ac, bc, abc

         []
    []            [a]
  []    [b]    [a]       [ab]
[] [c]           [ac]  [ab]   [abc]

#############################*/

function getAllSubsequences(str) {
  const results = [];
  const path = [];

  function helper(index) {
    // base case
    if (index === str.length) {
      if (path.length > 0) {
        results.push(path.join(''));
      }
      return;
    }

    // explore branches
    helper(index + 1); // without current letter 
    path.push(str[index]);
    helper(index + 1); // with current letter
    path.pop();
  }

  helper(0);

  return results;
}

/* Visualization of the stack:
results = [c]
path = [c]
 
helper(0) - line 37
helper(1) - line 31
*/

// Test Cases:
console.log(getAllSubsequences("abc"));

/*############################
QUESTION: 2: Binary Tree Paths
https://leetcode.com/problems/binary-tree-paths/
 
Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.

APPROACH:
  - DFS (backtracking)
  - need to identify leaf nodes
  - need to track path to specific node
  
  Input: root = [1,2,3,null,5]
  
       1
    2    3
      5
  Output: ["1->2->5","1->3"]

#############################*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  };
};

function allPathsToLeaves(root) {
  const results = [];
  const stack = [];

  const helper = (root) => {
    stack.push(root.value);

    // base case
    if (root.left === null && root.right === null) {
      // add path to the results
      results.push(stack.join("->"));
      stack.pop();
      return;
    };

    // traverse all branches
    if (root.left) helper(root.left);
    if (root.right) helper(root.right);

    stack.pop();
  }

  if (root !== null) {
    helper(root);
  };

  return results;
};

/*######################################
other way: passing extra parameters
- look at the arguments of our helper functions
- unlike the method above (encapsulation)
########################################*/
function allPathsToLeaves_helper(root, results, stack) {
  stack.push(root.value)

  // base case
  if (root.left === null && root.right === null) {
    // add path to the results
    results.push(stack.join("->"));
    stack.pop();
    return;
  }

  // traverse all branches
  if (root.left) allPathsToLeaves_helper(root.left, results, stack);
  if (root.right) allPathsToLeaves_helper(root.right, results, stack);

  stack.pop();
}

function allPathsToLeaves2(root) {
  const results = [];
  const stack = [];

  if (root !== null) {
    allPathsToLeaves_helper(root, results, stack); // use of the helper method.
  };

  return results;
};

// Test Cases:
console.log(allPathsToLeaves2(
  new Node(1,
    new Node(2, null, new Node(5)),
    new Node(3)))
);