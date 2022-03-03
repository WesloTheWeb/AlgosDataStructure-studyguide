/*##################################################################################
TAG: Sum Elements in a Binary Tree - 2m
#####################################################################################

Q. Given a binary tree, sum all elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
returns 20
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
function sumBT(root) {
  const stack = root ? [root] : [];
  let result = 0;

  while (stack.length) {
    const node = stack.pop();
    result += node.value;

    // moving our pointer to get the left and right. If there's node left or right then push.
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  };

  return result;
};

/*############################
Recursive Solution
############################*/
// O(N) time
function sumBT(root) {
  if (!root) return 0;

  return (
    root.value +
    sumBT(root.left) +
    sumBT(root.right)
  );
};

// Test Cases
console.log(sumBT(null)) // 0
console.log(sumBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6 
console.log(sumBT(new TreeNode(1))) // 1