// ? Utility Functions
/*
function tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
};

function ListNode(x) {
  this.value = x;
  this.next = null;
};

*/

/*
LINKED LIST
Question 1:
Given an unsorted linked list, count the number of elements recursively.

Examples:
1.) Gvien a linked list: 1 -> 2 -> 3
2.) Given an array: [3, 4, -6, 7, 9] returns 17 
(3 + 4 +(-6) + 7 + 9)
*/

function countNumberOfElements(head) {

};

// Solution:
const solutionNumberOfElements = (arg1) => {
    // null case
    if (!arg1) {
        return 0;
    };

    // recursive case
    return (arg1.value + solutionNumberOfElements(arg1.next));
};

/*
LINKED LIST
Question 2:
Given a linked list, determine if it is monotonically increasing. Monotonically increasing means always increasing
OR remaining constant.

Examples
1. Input: 1 -> 1 -> 2 -> 5  // returns true
2. Input: 1 -> -5 -> 3 -> -100 // returns false

*/

function monotonicallyIncreasing(head) {

};

/*
ARRAY
Question 3:
Given an unsorted array, perform bubble sort in ascending order

Examples
1. Input: [3, 1, 2, 4]  // returns [1, 2, 3, 4]
2. Input: [1] // returns [1]

*/

function bubbleSort(arr) {

};

const bubbleSortSolution = (arr) => {
    let length = arr.length;
    // outer
    for (let i = 0; i < length; i++) {
        // inner
        for (let j = 0; j < length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            };
        };
    };

    return arr;
};

/*
ARRAY
Question 4:
Given an array of 0's, 1's, and 2's sort them in-place in ascending order.

Examples
1. Input: [2, 1] // returns [1, 2]
2. Input: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]

*/

function dutchNationalFlag(array) {

};

/*
BINARY TREE
Question 5:
Given a binary tree, return the in-order traversal of its nodes' values. You must use iterative approach:

- In-order Traversal:
    1. Traverse the left subtree.
    2. Visit the root.
    3. Traverse the right subtree.
Examples
      1
    /   \
    2   3
    
returns [2, 1, 3]
*/

function inOrderTraversal(tree) {

};

/*
ARRAY
Question 6:
Given a non-empty array of integers, return the maximum sum by adding up all of the integers in a non-empty
subarray of the input array.

Examples
1.) Input: [-2, 1] // returns 1

2.) Input: [3, 4, -6, 7, 9] // returns 17
*/

function maximumSum(arr) {

};

/*
BINARY TREE
Question 7:
Given a non-empty binary tree, find the maximum path sum.

- A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connnections.
The path must contain at least one node and does not go through the root.

Examples
1.) GIven a tree:

        1
       / \
      2   3
     /
   -1

returns 6 (1 + 2 + 3)
*/

function maxPathSum(root) {

};

/*
BINARY SEARCH TREE
Question 8:
A tree is considered a binary search tree (BST) if for each of its nodes following is true:

- A tree is considered a binary search tree (BST) if for each of its nodes the following is true:
1. The left subtree of a node contains only nodes with keys less than the node's key.
2. The right subtree of a node contains only nodes with keys greater than the node's key.
3. Both the left and right subtrees must also be binary search trees.

Given a binary search tree t, find the kth smallest element in it.

Note: Your solution should have only one BST traversal and not use extra space beyond the recursive call stack..

Note: That kth smallest elemenet means kth element in incresaing order. 
*/

function smallestKthElementTree(root, k) {

};
