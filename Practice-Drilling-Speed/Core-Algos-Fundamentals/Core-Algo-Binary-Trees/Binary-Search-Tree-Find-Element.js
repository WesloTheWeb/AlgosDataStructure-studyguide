/*##################################################################################
TAG: Find Element in a Binary Search Tree - 1m
##################################################################################

Q. Given a binary search tree and a target integer, check if the tree contains a target.

Examples:
• Given a binary search tree:
                  8
                /   \
               3     10
              / \      \
             1   6      14
                       /
                     13

• For target: 4 // returns False.
• For target: 14 // returns True.

APPROACH:
- Have curr node that starts at the root of the tree. 
- If the node is less than the target, move curr to curr.right. 
- If the node is greater, move curr to curr.left. 
- If curr is nil at any point return false.

*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    };
};

function searchBST(root, target) {
    // Write code beloew:
};

// Test Cases
let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(searchBST(null, 1)); // false
console.log(searchBST(tree, 1)); // true
console.log(searchBST(tree, 14)); // true
console.log(searchBST(tree, 2)); // false
console.log(searchBST(tree, 13)); // true
console.log(searchBST(new TreeNode(), 0)); // true

// Given tree:
//                   8
//                 /   \
//                3     10
//               / \      \
//              1   6      14
//                        /
//                      13
