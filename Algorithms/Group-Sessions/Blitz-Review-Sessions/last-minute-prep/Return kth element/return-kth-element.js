/*
Q. Given a linked list, return the kth element from the end of the list.

You may assume all elements have a positive integer value.
If K exceeds the length of the list, return -1 instead.

Examples:

Given a linked list: [13, 1, 5, 3, 7, 10], k: 1 // returns 10
Given a linked list: [13, 1, 5, 3, 7, 10], k: 3 // returns 3
[execution time limit] 4 seconds (js)

[input] linkedlist.integer list

head of the list

[input] integer k

[output] integer
*/
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, k) {
    let fast = list;
    let slow = list;

    if (!list) return -1;

    // moves the fast pointer K times.
    for (let i = 0; i < k; i++) {
        if (fast.next) {
            fast = fast.next;
        } else {
            return -1;
        }
    };

    // move fast and slow pointer 
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow.value;
}
