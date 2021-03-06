/*##################################################################################
TAG: Validate a Binary Search Tree
#####################################################################################

Q. Given a binary tree, determine if it is a valid binary search tree (BST).

Examples:
• Given a binary tree:
        2
       / \
      1   3
// returns True

• Given a binary tree:
        1
       / \
      2   3    
// returns False

    10            T 10 min -Infinity, max Infinity
  /   \
 8     11                  
   6            node.right

  2
1  3

*/
// 8 node.left min -Infinity max - 10
// min, max = node.value
// left - node.value = max
// right - max
// Function Signature:
// function validateBST(node) -> Bool

// Time = O(n) \ Space = O(h) h is the height of tree

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    };
};

/*############################
Recursive Solution
############################*/

function validateBST(tree) {
    //base case
    if (!tree) return true;

    // helper function
    return isBST(tree);
}

const isBST = (node, min = -Infinity, max = Infinity) => {
    if (!node) return true;
    if (node.value <= min || node.value > max) {
        return false;
    };

    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
};

// Test Cases
var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))));
var tree4 = new TreeNode(2, new TreeNode(1), new TreeNode(2));
console.log(validateBST(null)); // true
console.log(validateBST(tree1)); // true
console.log(validateBST(tree2)); // false
console.log(validateBST(tree3)); // true
console.log(validateBST(new TreeNode())); // true
console.log(validateBST(tree4)); // false


/*#########################
LEETCODE VARIATION
- Deals with the case of null nodes
###########################*/

const isValidBST = (root) => dfs(root, null, null);

const dfs = (node, l, r) => {
    if (!node) return true;
    if (l && l.val >= node.val) return false;
    if (r && r.val <= node.val) return false;
    return dfs(node.left, l, node) && dfs(node.right, node, r);
};