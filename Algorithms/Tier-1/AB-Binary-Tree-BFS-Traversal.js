/*##################################################################################
TAG: Find Element in a Binary Tree Using BFS - 2m
#####################################################################################

Q. Given a binary tree and a target element's value, determine 
if the tree contains the target using breadth first search (BFS).

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

//Data dependency
class Node {
  constructor(val = 0, leftChild = null, rightChild = null) {
    this.val = val;
    this.left = leftChild;
    this.right = rightChild;
  };
};

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
// O(N^2) time (shift() is O(N) with array)
function BFSTree(node, target) {
  // queue
  let queue = node ? [node] : [];

  while (queue.length > 0) {
    // acts as a pointer
    let cur = queue.shift(); // dequeue first element

    if (cur.value === target) {
      return true;
    };

    // if a left node exist, we push to our Queue Array
    if (cur.left) {
      queue.push(cur.left);
    };

    // if a right node exist, we push to our Queue Array
    if (cur.right) {
      queue.push(cur.right);
    };
  };

  return false;
};

// Test Cases
var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(BFSTree(null, 1)) // false
console.log(BFSTree(tree1, 9)) // true
console.log(BFSTree(tree1, 1)) // false
console.log(BFSTree(tree1, 2)) // true
console.log(BFSTree(new TreeNode(1), 2)) // false