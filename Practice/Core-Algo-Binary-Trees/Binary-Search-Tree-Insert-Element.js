/*##################################################################################
TAG: Insert Element into a Binary Search Tree - 1m
##################################################################################

Q. Given a binary search tree and a target element's value, insert the target in the appropriate position.

Examples:
• Given a binary search tree:
              6
            /   \
           3     8
          / \ 
         2   4

• For target: 7 // returns:
              6
            /   \
           3     8
          / \    /
         2   4  7
        /     \
       1       5

• For target: 1 // returns:
              6
            /   \
           3     8
          / \
         2   4
        /
       1

*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}

function insertBST(root, target) {
    // Write your code here.

}

// Test Cases
var tree = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))

insertBST(tree, 7)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7])
insertBST(tree, 5)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 5])
insertBST(tree, 1)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 1, 5])
var tree2 = insertBST(null, 1)
console.log(tree2.value, 1)

// Final tree:
//              6
//            /   \
//           3     8
//          / \    /
//         2   4  7
//        /     \
//       1       5