/*
Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.

Examples:

Given an array: [2, 1] // returns [1, 2]
Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]
[execution time limit] 4 seconds (js)

[input] array.integer array

unsorted array of 0s, 1s, and 2s

[output] array.integer

sorted array of 0s, 1s, and 2s
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// CHEESE WAY LOL
function solution(array) {
    return array.sort();
}

// LOOK UP DUTCH FLAG PROBLEM FOR PROPER WAY