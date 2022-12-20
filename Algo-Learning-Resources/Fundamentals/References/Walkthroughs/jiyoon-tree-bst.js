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
        this.value = value;
        this.left = leftChild;
        this.right = rightChild;
    };
};

function arrayifyTree(root) {
    if (!root) { return [] };
    var queue = [];
    var array = [];

    queue.push(root);
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }

    return array;
};

/*
target 8

          4        is 8 less than 4? if so, go left. but it's not, so we go right... after we check that right exists
      2c       6    is 8 less than 6? no. so, we go right... but there's no right node. so we're done (creating the node, and putting 8 in it)
           None   None  

                   c 
    1 -> 2 -> 3 -> 4 -> None
*/


function insertBST(root, target) {
    let curr = root;
    let node = new TreeNode(target);

    // if (!root) return new TreeNode(target);
    if (!root) return node;

    // this while loop, not sure if reading it right.
    while (curr) {
        if (target < curr.value) {    // is 3 smaller than 4? yeah. so we need to move to the left
            if (curr.left) {
                curr = curr.left  // moving current POINTER from 4 to 2   
            } else {
                curr.left = node
                return;
            }
        }

        if (target > curr.value) {
            // do i have a curr.right? if so, traverse to the right.
            // if i do not have curr.right, my curr.right BECOMES my node with target value. 
            if (curr.right) {
                curr = curr.right;
            } else {
                curr.right = node
                return;
            }
        }

    }

    return root;

    //     let curr = root;
    //     // let curr = root ? [root] : [];

    //     // if there is no root target element will be the node.
    //     if (!root) return new TreeNode(target);

    //     // we want to check our target against our nodes as we go down
    //     while (curr) {
    //       // If target is less than node value, append to left
    //       if (curr.value < target) {
    //       // if (curr.value < root.left) {
    //         root.left = curr.value;
    //       } else {
    //       // if left exist, call recursive again
    //         insertBST(root.left, curr.value);
    //       }
    //       // If target is greater than node value, append to right
    //       if (curr.value > root.right) {
    //         root.right = curr.value;
    //       } else {
    //       // if right exist, call recursive again
    //         insertBST(root.right, curr.value);
    //       }
    //     };
};

// Test Cases
var tree = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8));

insertBST(tree, 7);
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7]);
insertBST(tree, 5);
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 5]);
insertBST(tree, 1);
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 1, 5]);
var tree2 = insertBST(null, 1);
console.log(tree2.value, 1);

// Final tree:
//              6
//            /   \
//           3     8
//          / \    /
//         2   4  7
//        /     \
//       1       5