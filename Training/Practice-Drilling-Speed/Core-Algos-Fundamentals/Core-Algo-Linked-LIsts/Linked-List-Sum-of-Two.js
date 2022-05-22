/*##################################################################################
TAG:  Sum Two Linked Lists of Equal Length
##################################################################################

Q. Given two linked lists of equal length, sum elements' value at the same position.

Examples:
• Given two linked lists: 1 ➞ 3 ➞ 5 and -1 ➞ 3 ➞ -10 // returns 0 ➞ 6 ➞ -5
• Given two linked lists: 0 and 0 // returns 0

APPROACH:
- Create curr1 and curr2 pointers. 
- curr1 iterates through the first linked list and curr2 iterates through the other. 
- At each location, sum the value at both nodes and store the value in curr1. Then, return the head of the first list. 
- This is an in place solution. You could alternatively create a new list.
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

function arrayify(head) {
    let ptr = head;
    var array = [];

    while (ptr != null) {
        array.push(ptr.value);
        ptr = ptr.next;
    };

    return array;
};

function sumTwoLL(head1, head2) {
    // Write code below:

};

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)));
var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)));
console.log(arrayify(sumTwoLL(LL1, LL2))); // [0, 6, -5]
console.log(arrayify(sumTwoLL(new ListNode(0), new ListNode(0)))); // [0]