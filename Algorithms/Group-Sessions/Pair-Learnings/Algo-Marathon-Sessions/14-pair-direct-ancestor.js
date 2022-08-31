/* Office Hour - Algo Marathon
Date: July 26th, 2022
PARTNERS: Isaiah F.

QUESTION:
Given a tree of family associations, person A, and person B: figure out if person A is a direct ancestor (parent) of person B.
Members in our tree are represented as integer values (eg: 1).
Return true if person A is the direct ancestor of person B, false if not.

Bonus followup question: Return if the relationship exists either way. A is a direct ancestor of B OR B is 
a direct ancestor of A.

Function Signature: 
function directAncestor(head, a, b)

Examples:
[1, 3, 2], A = 1, B = 2 => true
[1, 1, 2, null, null, 3, 4], A = 3, B = 4 => false
[1, 1, 2, null, null, 5, 9], A = 1, B = 9 => false

APPROACH:

[1, 3, 2], A = 1, B = 2 => true
     1
    / \
   3   2 
  / \   \ 
 5  4    6

Current: 1
Queue:  3, 2 

Current:  3
Queue: 5, 4, 2.. 

Current: 2
Queue: 6, 5, 4

PSEUDO CODE:
1. Define our base case
2. Define our recursive case
3. If B is a child of A return true, if not false.

Target runtime and space complexity:
 O(n), where n = # of nodes in tree, worst case
#########################################*/

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    };
};

// Our attempt:
function directAncestor(head, a, b) {
    // base case
    if (!head) return false;

    //recursiveCase
    if (head.value === a) {
        if (head.left && head.left.value === b) return true;
        if (head.right && head.right.value === b) return true;
    };

    if (head.value === b) {
        if (head.left && head.left.value === a) return true;
        if (head.right && head.right.value === a) return true;
    };

    return directAncestor(head.left, a, b) || directAncestor(head.right, a, b);
};

// Test Cases:
// [1, 3, 2], A = 1, B = 2 => true
// [1, 1, 2, null, null, 3, 4], A = 3, B = 4 => false
// [1, 1, 2, null, null, 5, 9], A = 1, B = 9 => false


// Solution: N/A


// Solution Test Cases:

let T1 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
/*
   1
 /   \
3     2   
*/

let T2 = new TreeNode(1, new TreeNode(1), new TreeNode(2, new TreeNode(3), new TreeNode(4)));
/*
     1
   /   \
  1     2   
       / \  
      3  4
*/

let T3 = new TreeNode(1, new TreeNode(1), new TreeNode(2, new TreeNode(5), new TreeNode(9)));
/*
    1
  /    \
 1     2
      / \
     5   9   
*/

let T4 = new TreeNode(1, new TreeNode(1, new TreeNode(5)), new TreeNode(2, new TreeNode(9)));
/*
    1
  /    \
 1     2
/     / 
5    9   
*/

console.log(directAncestor(T1, 1, 2)); // True
console.log(directAncestor(T2, 3, 4)); // False
console.log(directAncestor(T3, 1, 9)); // False
console.log(directAncestor(T3, 1, 1)); // True
console.log(directAncestor(T3, 2, 1)); // True
console.log(directAncestor(T4, 2, 9)); // True