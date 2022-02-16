/*
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

     10
  5     15
 2 5  13   22 
1       14

*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function validateBST(tree) {
    // Write your code here.
    return false
}

// Test Cases
var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(validateBST(null)) // true
console.log(validateBST(tree1)) // true
console.log(validateBST(tree2)) // false
console.log(validateBST(tree3)) // true
console.log(validateBST(new TreeNode())) // true


/*##########################
AIMEE'S SET UP INITIAL
############################*/
# Q. Given a binary tree, determine if it is a valid binary search tree (BST).

# Examples:
# • Given a binary tree:
#         2
#        / \
#       1   3
# // returns True

# • Given a binary tree:
#         1
#        / \
#       2   3
# // returns False

class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right       
        
def validate_bst(root: TreeNode) -> bool:
    # Write your code here.
    pass

# Test Cases
tree1 = TreeNode(2, TreeNode(1), TreeNode(3))
tree2 = TreeNode(1, TreeNode(2), TreeNode(3))
tree3 = TreeNode(8, TreeNode(3, TreeNode(1), TreeNode(6)), TreeNode(10, None, TreeNode(14, TreeNode(13))))
print(validate_bst(None), True)
print(validate_bst(tree1), True)
print(validate_bst(tree2), False)
print(validate_bst(tree3), True)