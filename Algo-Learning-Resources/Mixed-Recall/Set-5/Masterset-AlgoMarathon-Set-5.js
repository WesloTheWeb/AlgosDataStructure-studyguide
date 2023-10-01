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
Given a sorted linked list of unique integers, check if the list contains an element with a target value.

Examples
1.) Given a linked list: 1 -> 2, target: 2
returns true

2.) Given a linked list: 1 -> 2, target: -1
returns false.
*/

function findTarget(list, target) {

};

function solutionFindTarget(list, target) {
  let curr = list;

  while (curr) {
    if (curr.value === target) return true;

    curr = curr.next;
  };

  return false;
};

/*
LINKED LIST
Question 2:
Given an unsorted linked list, find the element with the highest value iteratively

Examples
1.) Given a linked list: 1 -> 2 -> 3
returns 3

2.) Given a linked list: 6 -> 1 -> 5 -> -13
returns 6
*/

function findHighestValueIteratively(list) {

};

/*
LINKED LIST
Question 3:
Given an unsorted linked list, find the element with the highest value recursively

Examples
1.) Given a linked list: 1 -> 2 -> 3
returns 3

2.) Given a linked list: 6 -> 1 -> 5 -> -13
returns 6
*/

function findHighestValueRecursively(list) {

};

/*
ARRAY
Question 4:
Given an unsorted array, perform bubble sort in ascending order.

Examples
1.) Given an array: [3, 1, 2, 4]
returns [1, 2, 3, 4]

2.) Given an array: [1]
returns [1]

*/

function bubbleSort(arr) {

};

/*
ARRAY
Question 5:
Given a shifted sorted array of distinct integers and a target integer, determine if the array contains
a target value by returning its index. Otherwise, return -1.

- Elements in the array are shifted by some amount (left or right):

Examples:
1.) Input: [6, 7, 1, 2, 3, 4, 5], target: 1
returns 2.

2.) Input: [9, 15, 30, -33, 3, 7], target: 0
returns -1.

*/

function findTargetShiftedArray(array, target) {

};

/*
ARRAY
Question 6:
Given an array of integers sorted in ascending order, convert it to a height balanced BST.
- A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differ
by more than 1.
- You must pick the smaller number when picking the "middle". In other words, when there are two numbers
to choose from to pick the next child node, choose the smaller value (see example below)/

Examples:
1. Given an array [-10, -3, 0, 5, 9]
returns

      0
     / \
    10  5
     \   \
     -3   9

1. choose 0 as a root node.
2. for left child node of 0, you have -10 and 5
3. Similar for choosing the right child of

*/

function convertArrayToBalancedBST(array) {

};

/*
ARRAY
Question 7:
Given a string, find the longest palindromic substring. You may sassume there is only one longest substring.

Examples:
1. Input: "babe" // returns "bab"
2. Input "aefez" // returns "efe"
*/

function longestPalindromicSubstring(string) {

};

/*
ARRAY
Question 8:
Given k sorted arrays, merge all the arrays into a single array.
- Each array is sorted in ascending order.

Examples:
- Given one empty array: returns []
- Given 3 arrays:
  [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6]
  ]
 
  returns [1, 1, 2, 3, 4, 4, 5, 6]
*/

function mergeSort(array) {

};

/*
BINARY TREE
Question 9:
Given a binary tree, find the lowest common ancestor of two given nodes in the tree and return its value.

- A node can be its own ancestor.

Examples:
- Given a binary tree:

     10
    /   \
   5    12
 /  \   /   
3   6  11

- For node1: 3, node2: 6 returns 5
- For node1: 11, node2: 6 returns 10
? **This is an important problem to really understand and variants like that Meta interview.
*/

function findLowestCommonAncestor(root, val1, val2) {

};

/*
ARRAY
Question 10:
Given two sorted arrays of integers with possibly different sizes, return the median of the two sorted arrays.
- You may assume there are no duplicate elements.

Examples:
- array1: [1, 3], array2: [2] 
returns 2

- array1: [1, 3], array2: [2, 4]
returns 2.5

- array1: [], array2: [0]
returns 0
*/

function findMedianOfTwoArrays(array1, array2) {

};