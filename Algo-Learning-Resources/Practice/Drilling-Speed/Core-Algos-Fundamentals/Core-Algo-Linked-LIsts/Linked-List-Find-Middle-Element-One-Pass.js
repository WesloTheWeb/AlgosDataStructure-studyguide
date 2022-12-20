/*##################################################################################
TAG: Find the Middle Element from a Linked List in One Pass - 2m
##################################################################################

Q. Given a linked list, find the middle element in one pass. If the length of the list is even, return the first of the two middle nodes.
Follow-up: What if we want to return the second of the two middle nodes in lists with even numbers of nodes?

Examples:
• Given a linked list: 1 ➞ 3 ➞ 5 // returns 3
• Given a linked list:  1 ➞ 2 ➞ 3 ➞ 4 // returns 2

- Create two pointers, one called fast and one called slow. 
- Every time you move slow, move fast twice. 
- When fast reaches the end of the list, return slow.

1  3  5
f
s
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

// O(N) time
function findMiddle(head) {
  // Write code below:
  
}
// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)));
var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))));
var LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(findMiddle(null)); // null
console.log(findMiddle(LL1)); // 3
console.log(findMiddle(LL2)); // -13
console.log(findMiddle(LL3)); // 2
console.log(findMiddle(new ListNode(1))); // 1