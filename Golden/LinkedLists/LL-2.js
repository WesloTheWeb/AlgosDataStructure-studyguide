/* 
QUESTION: 
Given a non-empty linked list representing a non-negative integer, add one to the integer and return 
the sum as a linked list. The most significant digit comes first and each of their nodes contains a single digit.

You may assume the integer doesn't contain any leading zero, except the number 0 itself.

Example:
Input:  1 -> 2 -> 3
Output: 1 -> 2 -> 4
*/

function solution(head) {
    let curr = head;
    let carryOver = 0;
    let remainingValue = 0;

    while (curr) {
        // add one to end.
        if (curr.next === null) {
            curr.value += 1;
        };

        // traverse node
        curr = curr.next;
    };

    return head;
};