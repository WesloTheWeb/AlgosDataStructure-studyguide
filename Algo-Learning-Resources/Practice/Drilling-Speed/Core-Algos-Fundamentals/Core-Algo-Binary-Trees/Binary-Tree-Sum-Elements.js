/*##################################################################################
TAG: Sum Elements in a Binary Tree - 2m
#####################################################################################

Q. Given a binary tree, sum all elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
returns 20
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    };
};

function sumBT(root) {
   // write code below
}

// Test Cases
console.log(sumBT(null)); // 0
console.log(sumBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 6 
console.log(sumBT(new TreeNode(1))); // 1