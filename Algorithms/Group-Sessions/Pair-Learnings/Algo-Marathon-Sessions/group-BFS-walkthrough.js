/*#############
Prompt:
Given the root of a binary tree, return the preorder traversal of its nodes' values as an array of values.
Implement this iteratively, not recursively. The test cases will still pass if you implement it recursively, 
but please do not use recursion in your solution.
#############*/

function preorderTraversal(root) {
  // 0. base cases
  if (!root) return [];
  // 1. initialize any variables
  const stack = [root];
  const res = [];

  while (stack.length) {
    // pop off the first item in the stack
    const node = stack.pop();
    // 2. conditional
    res.push(node.val);

    // 3. traverse
    if (node.right) {
      stack.push(node.right);
    };

    if (node.left) {
      stack.push(node.left);
    };
  };

  // 4. return results
  return res;
}

//  Preorder (Root, Left, Right) -- DFS 
/*
stack
 
4
3
1
*/

/**
 * Input:
 *      1
 *    2   3 
 *  4  _  1  1
 * 8  5
 * 
 * Result: [1, 2, 4, 8, 5, 3, 1, 1]
 * 
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

let left = new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5));
let right = new TreeNode(3, new TreeNode(1), new TreeNode(1));
let tree = new TreeNode(1, left, right);

console.log(preorderTraversal(tree));