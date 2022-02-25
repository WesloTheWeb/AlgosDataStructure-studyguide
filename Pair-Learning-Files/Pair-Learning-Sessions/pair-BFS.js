/*################
PAIR LEARNING: BFS
###################
Question: 
- Given a binary tree and a target element's value, determine if the tree contains the target using 
breadth first search (BFS).

     a
  /    \
 b       
/  \   
d   e  
target : e
queue [ de ]
targeted: ab
*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  };
};

function BFSTree(root, target) {

  if (!root) {
    return false
  };

  const queue = [root];

  while (queue.length > 0) {
    let current = queue.shift()
    if (current.value == target) {
      return true
    }

    if (current.left != null) {
      queue.push(current.left)
    }
    
    if (current.right != null) {
      queue.push(current.right)
    }
  };

  return false
};

// Test Cases
var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(BFSTree(null, 1)) // false
console.log(BFSTree(tree1, 9)) // true
console.log(BFSTree(tree1, 1)) // false
console.log(BFSTree(tree1, 2)) // true
console.log(BFSTree(new TreeNode(1), 2)) // false