/*##################################################################################
TAG: Find Element in a Binary Tree Using DFS - 2m
#####################################################################################

Q. Given a binary tree and a target element's value, determine 
if the tree contains the target using depth first search (DFS).

Examples:
• Given a binary tree:
                 3
                / \
              29   4
              /     \
             2       2
                    /
                   9
• For target: 1 // returns False
• For target: 2 // returns True

*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    };
};

/*############################
Iterative Solution
############################*/
// O(N) time
function DFSTree(node, target) {
    // write code below
};

/*############################
Recursive Solution
############################*/

// O(N) time
function DFSTree(node, target) {
    // write code below
};

// Test Cases
var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(DFSTree(null, 1)) // false
console.log(DFSTree(tree1, 9)) // true
console.log(DFSTree(tree1, 1)) // false
console.log(DFSTree(tree1, 2)) // true
console.log(DFSTree(new TreeNode(1), 2)) // false