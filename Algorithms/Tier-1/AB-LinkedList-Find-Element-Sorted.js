/*##################################################################################
TAG: Find Element in a Sorted Linked List - 1m
#####################################################################################

Q. Given a sorted linked list of unique integers, check if the list contains an element with a target value.

Examples:
• Given a linked list: 2 ➞ 3 ➞ 5, target: 2 // returns True
• Given a linked list: 2 ➞ 3 ➞ 5, target: 4  // returns False
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    };
};

function search(head, target) {
    let node = head;

    while (node) {
        if (node.value == target) {
            return true;
        };
        
        node = node.next;
    };

    return false;
};

// Test Cases
let LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))));
console.log(search(null, 1)); // false
console.log(search(LL1, 2)); // true
console.log(search(LL1, 4)); // false
console.log(search(LL1, -1)); // false
console.log(search(LL1, 10)); // true
console.log(search(LL1, 11)); // false
