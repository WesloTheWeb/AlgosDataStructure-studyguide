/*################################################
PROBLEM 6:
Status: Good (Start learning this pattern)
Q. Given a binary tree, return the in-order traversal of its nodes' values. You must use iterative approach.

In-order traversal:

Traverse the left subtree.
Visit the root.
Traverse the right subtree.

Example:

Given a binary tree:
           1
          / \
         2   3
// returns [2, 1, 3]

##################################################*/

 
/* APPROACH
 

*/

// Function:
function solution(root) {
    let stack = [];
    const res = [];
    let curr = root;
    
    while (curr !== null || stack.length !== 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.value);
        curr = curr.right;
    }
    
    return res;
}
