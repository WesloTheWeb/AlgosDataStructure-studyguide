/*################################################
**Good problem to revisit in future for reference**.
PROBLEM 1:
Status: Perfecto
Q. Given an unsorted linked list, count the number of elements recursively.

Examples:

Given a linked list: 1 -> 2 -> 3 // returns 3
Given a linked list:1 // returns 0
[execution time limit] 4 seconds (js)

[input] linkedlist.integer arg1

the head of the list

[output] integer

the number of all nodes in the list


##################################################*/

 
/* APPROACH
 - We can recursively write this by incrementing each traversal.
 - Start off with 1 and each time to the end with the next pojnter

*/

// Function:
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function solution(arg1) {
    if (!arg1) return 0;
    
    return 1 + solution(arg1.next);
}


/* TEST CASES
Input: arg1: [];
expected: 0;

Input:
arg1: [1]
Expected Output: 1

Input:
arg1: [1, 1]
Expected Output: 2

Input:
arg1: [1, 2, 3]
Expected Output: 3

Input:
arg1: [-1, -5, 1, 13, 100, -1321, 0, 0, 0]
Expected Output: 9

*/