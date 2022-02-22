/*##################################################################################
TAG: Count Elements in a Binary Tree (iterative / recursive) - 2m
####################################################################################

Q. Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 5
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
function countTree(root) {
    const stack = root ? [root] : [];
    let result = 0;

    while (stack.length) {
        const node = stack.pop();
        result += 1;
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    };

    return result;
};

// Test Cases
console.log(countTree(null)) // 0
console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 3
console.log(countTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))); // 6
console.log(countTree(new TreeNode())); // 1