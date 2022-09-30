/*################################################
PROBLEM 6
Status: Bad
Q. Given an array of integers sorted in ascending order, convert it to a height balanced BST.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
You must pick the smaller number when picking the "middle." In other words, when there are two numbers to choose from to pick the next child node, choose the smaller value (see example below).
Example:

Given an array: [-10,-3,0,5,9]

// returns:

                0
               / \    
             -10   5 
               \    \
               -3    9

1. Choose 0 as a root node.
2. For left child node of 0, you have -10 and -3. According to the rule, you choose the smaller value -10.
3. Similar for choosing the right child node of 0, you are left with 5 and 9. Since 5 is smaller than 9, 5 
becomes the right child node.

##################################################*/

 
/* APPROACH
 

*/

// Base: 
function solution() {

}


// ATTEMPT: