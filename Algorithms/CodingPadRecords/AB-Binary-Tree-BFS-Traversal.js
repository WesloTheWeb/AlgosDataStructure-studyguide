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
    }
}

const tree1 = new Node(3, new Node(29, new Node(2)), new Node(4, null, new Node(2, new Node(9))))

function BFSTree(node, target) {
    let queue = node ? [node] : [];
  
    while (queue.length > 0) {
      let cur = queue.shift(); // dequeue first element
      if (cur.value === target) {
        return true;
      };
      
      if (cur.left) {
        queue.push(cur.left);
      };

      if (cur.right) {
        queue.push(cur.right);
      };
    };
  
    return false;
  };

console.log(bfs(null, 1)) // true
console.log(bfs(tree1, 2)) // false