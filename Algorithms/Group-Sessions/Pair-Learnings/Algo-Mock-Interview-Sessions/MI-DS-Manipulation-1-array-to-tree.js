/*Algo Mock Interviews
Date: Narch 14, 2023
PARTNERS: 

❓ QUESTION
Today, you will be constructing a binary tree given the pre-order and in-order traversals of it:

Source: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
  
Reference: 
PRE-ORDER TRAVERSAL: Root node, left, right
IN - ORDER TRAVERSAL: Left, Root node, right
(post - order): right, left, root node

EXAMPLE(S)
EXAMPLE 1
  1
2
Preorder: [1, 2]
Inorder: [2, 1]

Example 2
1
  2
Preorder: [1, 2]
Inorder: [1, 2]

EXAMPLE 3
   1
2    3

          1
        /   \
       2     3
     /  \   / \

Preorder: [1, 2, 3]
Inorder: [2, 1, 3]

EXAMPLE 4
Preorder: [-1]
return -1 same with inOrder

APPROACH:
- create treeNode class 
- for preOrder argument and inOrder argument construct the tree respectively

PRE-ORDER TRAVERSAL: Root node, left, right
IN - ORDER TRAVERSAL: Left, Root node, right
(post - order): right, left, root node

FUNCTION SIGNATURE
function constructTree(preorder, inorder) // returns the root of the tree

- Working backwards from the array to a tree
 */

// My Attempt:
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    };
};

function constructTree(preorder, inorder) {
    const constructedTree = []
    // preorder
    // preorder.forEach((node) => {
    //   // new TreeNode(node);
    //   constructedTree.push(new TreeNode(node));
    // })

    // [1, 2, 3]
    const TreeNode = new Node(preorder[0]);

    for (let i = 0; i < preorder.length; i++) {
        TreeNode.left = new Node(preorder[i + 1]);
        TreeNode.right = new Node(preorder[i + 2]);
    }

    constructedTree.push(TreeNode)

    console.log(constructedTree)
};

console.log(constructTree([1, 2, 3]));

// Solution:
function solution(preorder, inorder) {
    let porderIndex = 0;

    const inorderMap = {};
    for (let i = 0; i < inorder.length; i++) {
        inorderMap[inorder[i]] = i;
    }

    const helper = (preorder, inorder, start, end) => {
        // base case
        if (start === end) return null;

        const val = preorder[porderIndex++];
        const root = new Node(val);

        // recursive case
        root.left = helper(preorder, inorder, start, inorderMap[val]);
        root.right = helper(preorder, inorder, inorderMap[val] + 1, end);

        return root;
    };

    return helper(preorder, inorder, 0, inorder.length);
};

/*########
TAKE AWAYS
###########
- Make sure you review going from one data structure to another.
- This problem was essentially array to tree.
*/

// Check this solution / variant related:
function buildTree(preorder, inorder) {
    // Helper function
    function buildTreeHelper(preorderStart, preorderEnd, inorderStart, inorderEnd) {
      if (preorderStart > preorderEnd || inorderStart > inorderEnd) return null;
  
      const rootValue = preorder[preorderStart];
      const root = { val: rootValue, left: null, right: null };
      const inorderIndex = inorderMap.get(rootValue);
  
      // Construct left and right subtrees
      root.left = buildTreeHelper(preorderStart + 1, preorderStart + (inorderIndex - inorderStart), inorderStart, inorderIndex - 1);
      root.right = buildTreeHelper(preorderStart + (inorderIndex - inorderStart) + 1, preorderEnd, inorderIndex + 1, inorderEnd);
  
      return root;
    }
  
    // Create a lookup map for inorder traversal
    const inorderMap = new Map();
    inorder.forEach((val, idx) => {
      inorderMap.set(val, idx);
    });
  
    return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
  }
  
  console.log(buildTree([1,2,3], [2,1,3]))