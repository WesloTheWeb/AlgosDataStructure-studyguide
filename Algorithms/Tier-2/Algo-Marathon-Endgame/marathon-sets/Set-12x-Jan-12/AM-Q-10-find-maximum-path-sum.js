/*################################################
PROBLEM 10:
Status: Cheesed (please review when get chance!)
Q. Given a non-empty binary tree, find the maximum path sum.

A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
The path must contain at least one node and does not need to go through the root.

Example:

Given a tree:
           1
          / \    
         2   3
        /     
      -1   
// returns 6 (1 + 2 + 3)

[execution time limit] 4 seconds (js)

[input] tree.integer root

root of the tree

[output] integer

length of the maximum path sum

##################################################*/


/* APPROACH
 
wtf does MIN_SAFE_INTEGER does
*/

// Function:
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {
    let max = Number.MIN_SAFE_INTEGER;

    function dfs(node) {
        if (!node) return 0;
        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));
        max = Math.max(max, left + right + node.value);
        return Math.max(left, right) + node.value;
    }
    dfs(root);
    return max;
};

/* initial attempt


function solution(root) {
    // base case
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.value; 
    
    // recursive case
      const maxChildPathSum = Math.max(solution(root.left), solution(root.right))
     return root.value + maxChildPathSum; 
}


*/