/* Office Hour - Algo Marathon
Date: 
TOPIC:
Contains:
- 
-
-
-
-
#########################################*/

/*############################
QUESTION: 1: 
#############################*/

/*

get all subsequences


abc
subsequences: a, b, c, ab, ac, bc, abc

         []
    []            [a]
  []    [b]    [a]       [ab]
[] [c]           [ac]  [ab]   [abc]

*/


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
  
  /*
  results = [c]
  path = [c]
  
  helper(0) - line 37
  helper(1) - line 31
  */
  
  console.log(getAllSubsequences("abc"));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
  https://leetcode.com/problems/binary-tree-paths/
  - DFS (backtracking)
  - need to identify leaf nodes
  - need to track path to specific node
  
  Input: root = [1,2,3,null,5]
  
       1
    2    3
      5
  Output: ["1->2->5","1->3"]
  */
  
  class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function allPathsToLeaves(root) {
    const results = [];
    const stack = [];
  
    function helper(root) {
      stack.push(root.value);
  
      // base case
      if (root.left === null && root.right === null) {
        // add path to the results
        results.push(stack.join("->"));
        stack.pop();
        return;
      }
  
      // traverse all branches
      if (root.left) helper(root.left);
      if (root.right) helper(root.right);
  
      stack.pop();
    }
  
    if (root !== null) {
      helper(root);
    }
    return results;
  }
  
  // other way: passing extra parameters
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
      allPathsToLeaves_helper(root, results, stack);
    }
    return results;
  }
  
  /*
  console.log(allPathsToLeaves2(
    new Node(1,
      new Node(2, null, new Node(5)),
      new Node(3)))
  );
  */
  