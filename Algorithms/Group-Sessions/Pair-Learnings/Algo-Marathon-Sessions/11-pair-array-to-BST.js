/* Office Hour - Algo Marathon
Date:  July 11th, 2022
PARTNERS: Dana (originally)

QUESTION:
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary 
search tree. Convert a sorted array into a balanced BST. Return the root of the created tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never 
differs by more than one.

Examples:
[1, 2, 3, 4, 5] =>
        3
      /   \
    2      4
  /          \
1             5

APPROACH:
- Working backwards.. from an array to a BST.
- We know the array is sorted, and BST is sorted.
- Can probably have the middle index of sorted array as our root.

how would find middle index?


PSEUDO CODE:


Target runtime and space complexity:
Runtime: O(n)
Space: O(log n), not including space used to create BST, otherwise O(n)
#########################################*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
};

// Our attempt:
var sortedArrayToBST = function (nums) {

};



// Test Cases:
// Test trees of various shapes and sizes: all left, all right, mixed, just a root, etc.


// Solution:



// Solution Test Cases: