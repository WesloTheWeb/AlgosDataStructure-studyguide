/*
We want to traverse the tree and return back 3 values
maximum in node left subtree
maximum i node right subtree
node's data

*/

// class TreeNode {
//   constructor(value = 0, leftChild = null, rightChild = null) {
//     this.value = value
//     this.left = leftChild
//     this.right = rightChild
//   }
// }

// function arrayifyTree(root) {
//   if (!root) { return [] };
//   var queue = [];
//   var array = [];
//   queue.push(root);
//   while (queue.length !== 0) {
//     var node = queue.shift();
//     array.push(node.value);
//     if (node.left) { queue.push(node.left) };
//     if (node.right) { queue.push(node.right) };
//   };
//   return array;
// };


// const findMax = (node) => {
//   // base case
//   if (!node) { 
//     return null;
//   } else {
//     let leftMax = findMax(node.left);
//     let rightMax = findMax(node.right);
//     return Math.max(node.value, leftMax, rightMax);
//   }

// }

// console.log(arrayifyTree(TreeNode), [2, 7, 5, 6, 1, 11, 9, 4]) // [2, 7, 5, 6, 1, 11, 9, 4]

function dfs(root, target) {
    if (!root) return null;
    if (root.val == target) return root;
    // return non-null return value from the recursive calls
    let left = dfs(root.left)
    let right = dfs(root.right)
  
    if (left != null) return left
    // at this point, we know left is null, and right could be null or non-null
    // we return right child's recursive call result directly because
    // - if it's non-null we should return it
    // - if it's null, then both left and right are null, we want to return null
    return right
  }
  