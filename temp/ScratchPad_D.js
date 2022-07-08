/* Deepest Node

Given a binary tree, return the deepest node (furthest away child).
.       a
.      /  \
.    b    c
.  /
. d

Return d

Can assume nodes have a .value, .left, and a .right field

Clarifying Questions:
- If 2 are equally far away return either one


Approach:

- dfs, recursive
- keep track of max height
- keep track of node of that max height

Pseudo code:
1. create stack, intialize variables (max height and the deepestNode).
2. helper function takes current node
3. return deepestNode
*/

class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    };
  };
  
  function deepestNode(root) {
    if (!root) return root;
    let max_height = -Infinity;
    let result = null;
    
    helper(root);
    
    function helper(tree, max = 0) {
      if (!tree) return;
      
      helper(tree.left, max + 1);
      helper(tree.right, max + 1);
  
      if (max > max_height) {
        max_height = max;
        result = tree;
      };
    };
    
    return result;
  };
  
  
  // function deepestNode(root) {
  //   if (!root) return root;
  //   let max_height = -Infinity;
  //   let result = null;
    
  //   helper(root);
    
  //   function helper(tree, max = 0) {
  //     if (!tree) return;
      
  //     helper(tree.left, max + 1);
  //     helper(tree.right, max + 1);
  
  //     if (max > max_height) {
  //       max_height = max;
  //       result = tree;
  //     };
  //   };
    
  //   return result;
  // };
  
  // Test Cases:
  let tree1 = new TreeNode('a', new TreeNode('b', new TreeNode('d'), new TreeNode('c')))
  console.log(deepestNode(tree1), new TreeNode('d'));
  console.log(deepestNode(null), null);
  console.log(deepestNode(new TreeNode(1)), new TreeNode(1));