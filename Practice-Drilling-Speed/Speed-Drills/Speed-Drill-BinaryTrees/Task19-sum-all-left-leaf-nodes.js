/*
Q: Given a binary tree, sum all left leaf nodes.

Binary trees are already defined with this interface:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

APPROACH:
- DFS to the left to the left
- sum variable for total
- add only values of left node to sum variable
- ignore right node 
*/

function solution(root) {
    if (!root) {
        return null;
    } else if (root.left != null && root.left.left == null && root.left.right == null) {
        return root.left.value + solution(root.right);
    } else {
        return solution(root.left) + solution(root.right);
    }      
};

/*##############
INITIAL ATTEMPT
################

    let leftSumNodes = 0;
    // null case    
    if (!root) {
     return null  
     
    const traverse = node => {
         if (node.left) {
             leftSumNodes = leftSumNodes + node.left.value;
             traverse(node.left);
         };
         
         if (node.right) {
             traverse(node.right);
         }
     };
      
    traverse(root);
*/
    