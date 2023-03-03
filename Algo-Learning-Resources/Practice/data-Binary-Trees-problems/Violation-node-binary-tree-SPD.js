/*########################################################################################
Q. Given a binary search tree, return the value of the violating node. When there is a violation, return the lowest node.
If there is no violating node, return -1.

For example, in this tree:

      5
    /  \
  2    10
   \
    8
We have a violation between 5 and 8 because 8 is not less than 5. Because 8 is the lower node, return 8.
############################################################################################*/

function Tree(x, leftChild = null, rightChild = null) {
  this.value = x;
  this.left = leftChild;
  this.right = rightChild;
}

function solution(root, min = -Infinity, max = Infinity) {
  // console.log(root); 
  if (!root) return null;
  if (root.value <= min || root.value > max) {
    return root.value;
  };
  
  return solution(root.left, min, root.value) && solution(root.right, root.value, max);
}

let tree1 = new Tree(5,
  new Tree(2, null, new Tree(8)),
  new Tree(10));
console.log(solution(tree1));  