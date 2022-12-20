/*################################################
PROBLEM 1
Q. Given a linked list, return the kth element from the end of the list.

You may assume all elements have a positive integer value.
If K exceeds the length of the list, return -1 instead.
Examples:

Given a linked list: [13, 1, 5, 3, 7, 10], k: 1 // returns 10
Given a linked list: [13, 1, 5, 3, 7, 10], k: 3 // returns 3
##################################################*/

// Singly-linked lists are already defined with this interface:
function ListNode(x) {
    this.value = x;
    this.next = null;
}

/*
Given a linked list: [13, 1, 5, 3, 7, 10], k: 1 // returns 10

13, 1, 5, 3, 7, 10
s
    f

- pointer at the end of list? But its a LL so need to be subsequentg...
- Need a way to relate kth to a number
*/
function solution(list, k) {
    let curr = list;
    let fast = list.next;
    let slow = list;

    for (let i = 0; i < k; i++) {
        if (fast) {
            fast = fast.next;
        } else {
            return -1;
        };

        while (fast) {
            fast = fast.next;
            slow = slow.next;
        };

        return slow.value;
    };
};

// Test Case
const testCase1 = {
    list: [13, 1, 5, 3, 7, 10],
    k: 1
}

